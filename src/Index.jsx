import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  useBlocker,
  Outlet,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { buildRegistry } from './componentsRegistry.jsx';

// =========================================================================
// ROUTE PAGES
// =========================================================================

function FormPage() {
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();
  const blocker = useBlocker(() => !saved && name.trim() !== '');

  return (
    <div className="bg-white text-dark p-2">
      <h5 className="fw-bold mb-3">useBlocker verification flow</h5>
      <input
        type="text"
        placeholder="Type something to test route blocks..."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setSaved(false);
        }}
        className="form-control mb-3"
      />
      <div className="d-flex gap-2">
        <button onClick={() => setSaved(true)} className="btn btn-primary btn-sm">
          Save form state
        </button>
        <button onClick={() => navigate('/home')} className="btn btn-outline-secondary btn-sm">
          Go to home
        </button>
      </div>

      {blocker.state === 'blocked' && (
        <div className="mt-3 alert alert-danger p-2 small">
          <p className="mb-2 fw-bold">Unsaved progress detected. Exit anyway?</p>
          <button onClick={() => blocker.proceed()} className="btn btn-danger btn-sm me-2 py-0 px-2">
            Leave
          </button>
          <button onClick={() => blocker.reset()} className="btn btn-secondary btn-sm py-0 px-2">
            Stay
          </button>
        </div>
      )}
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-center text-dark py-4">
      <h5 className="fw-bold mb-3">Home route</h5>
      <p className="text-muted small mb-3">Confirms isolated routing works natively.</p>
      <button onClick={() => navigate('/')} className="btn btn-primary btn-sm">
        Back to sandbox hub
      </button>
    </div>
  );
}

// Registry is built here (not in the data module) so FormPage/Home stay
// route-local without creating a circular import between the two files.
const componentsRegistry = buildRegistry({ FormPage, Home });

// =========================================================================
// DASHBOARD GRID
// =========================================================================

function ComponentCard({ comp }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-12">
      <Link to={`/component/${comp.id}`} className="text-decoration-none">
        <div className="card h-100 border-0 shadow-sm rounded-3 bg-white text-dark component-card">
          <div className="card-body p-3 d-flex flex-column justify-content-between">
            <div>
              <span className="badge bg-secondary mb-2 text-uppercase font-monospace" style={{ fontSize: '10px' }}>
                {comp.category || 'Module component'}
              </span>
              <h6 className="card-title fw-bold m-0 text-dark" style={{ lineHeight: '1.4' }}>
                {comp.name}
              </h6>
            </div>
            <div className="border-top pt-2 mt-3 text-primary d-flex justify-content-between align-items-center" style={{ fontSize: '13px' }}>
              <span>Open in isolation</span>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function DashboardGrid() {
  return (
    <div className="row g-4">
      {componentsRegistry.map((comp) => (
        <ComponentCard key={comp.id} comp={comp} />
      ))}
    </div>
  );
}

// =========================================================================
// ISOLATED MODULE RENDERER
// =========================================================================

function ComponentIsolator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const activeModule = componentsRegistry.find((c) => c.id === id);

  if (!activeModule) {
    return (
      <div className="text-center p-5 bg-white rounded shadow text-dark">
        <h3>Component not found</h3>
        <button onClick={() => navigate('/')} className="btn btn-dark mt-3">
          Back to grid
        </button>
      </div>
    );
  }

  return (
    <div className="card shadow border-0 rounded-4">
      <div className="card-header bg-dark text-white py-3 d-flex justify-content-between align-items-center rounded-top-4">
        <h5 className="m-0 fw-bold">{activeModule.name}</h5>
        <button className="btn btn-outline-light btn-sm" onClick={() => navigate('/')}>
          Close &times;
        </button>
      </div>
      <div className="card-body p-4 bg-white min-vh-75">{activeModule.element}</div>
    </div>
  );
}

// =========================================================================
// LAYOUT SHELL
// =========================================================================

function MasterLayout() {
  return (
    <div className="container-fluid py-5 bg-light min-vh-100">
      <div className="container px-md-4">
        <Outlet />
      </div>
    </div>
  );
}

function DashboardHome() {
  return (
    <>
      <div className="text-center mb-5 text-dark">
        <h2 className="fw-bold m-0">Ecosystem grid sandbox dashboard</h2>
        <p className="text-muted mt-1">
          {componentsRegistry.length} isolated component demos, four per row on large screens.
        </p>
      </div>
      <DashboardGrid />
    </>
  );
}

// =========================================================================
// ROUTER
// =========================================================================

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      {
        path: 'home',
        element: (
          <div className="card shadow border-0 p-4 bg-white mx-auto" style={{ maxWidth: '600px' }}>
            <Home />
          </div>
        ),
      },
      { path: 'component/:id', element: <ComponentIsolator /> },
    ],
  },
]);

export default function IndexApp() {
  return <RouterProvider router={router} />;
}