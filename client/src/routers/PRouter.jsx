import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../screens/login';
import Register from '../screens/register';
import Layout from '../screens/layout';


export default function PRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          {/* <Route path="cours" element={<Cours />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}