import toast, { Toaster } from 'react-hot-toast';
import Form from './Form';
const notify = () => toast('welcome to toster application');

export default function ToastApp() {
  return (
    <div>
      <button onClick={notify}>Click me</button>
       <div className="h-screen flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <Form />
    </div>
    </div>
  );
};
