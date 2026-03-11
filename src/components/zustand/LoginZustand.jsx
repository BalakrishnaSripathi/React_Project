import Counter from './Counter';
import useStore from './store';

function Login() {
  const { user, login, logout } = useStore();

  return (
    <div>
      <h2>{user ? `Welcome ${user}` : "Not Logged In"}</h2>

      <button className='btn btn-outline-success' onClick={() => login("TO Counter Application")}>Login</button>
      <button className='btn btn-outline-danger' onClick={logout}>Logout</button>
      {user?<Counter/>:''}
    </div>
  );
}
export default Login