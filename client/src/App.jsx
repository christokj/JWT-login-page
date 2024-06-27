import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from "react-router-dom";
import router from './route';
import axios from 'axios';
  
function App() {

  axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.withCredentials = true;

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
