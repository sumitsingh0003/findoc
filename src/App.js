import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Modules/HomePage/HomePage';
import PortalDashbord from './Modules/Dashboard/Dashbord';



function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/portal" element={<PortalDashbord />}/>
   </Routes>
   

   </>
  );
}

export default App;
