import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout';


function App() {
  

  return (
    //need to add some routes 
    <Routes>
      <Route path = "/" element = {<Layout/>} >
        <Route index element = {<IndexPage/>} />
        <Route path = '/login' element = {<LoginPage/>} />
      </Route>
      
      
    </Routes>

    
    // <div className='bg-red-500'>
    //   test
    // </div>
  )
}


export default App
