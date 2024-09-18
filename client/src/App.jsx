import {useState} from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css'
import CreateTask from './pages/CreateTask';
import Wallet from './pages/Wallet';
import ViewAllTask from './pages/ViewAllTasks';
import ViewTask from './pages/ViewTask';
import DeleteTask from './pages/DeleteTask';
import UpdateTask from './pages/UpdateTask';
import ViewAllTasks from "./pages/ViewAllTasks";


function App() {

const [state,setState]=useState({web3:null,contract:null,account:null})

const saveState=({web3,contract,account})=>{
  setState({web3:web3,contract:contract,account:account})
}
  const router=createBrowserRouter([
    {path:'/',element:<Wallet saveState={saveState}/>},
    {path:'/view-all-task',element:<ViewAllTasks/>}, 
    {path:'/create-task',element:<CreateTask state={state}/>},
    {path:'/view-task',element:<ViewTask/>},
    {path:'/delete-task',element:<DeleteTask state={state}/>},
    {path:'/update-task',element:<UpdateTask state={state}/>},
  ])
  return (
   <>
   {/* <Navigation account={state.account} />  */}
  <RouterProvider router={router}/>
    </>
  )
}

export default App;
