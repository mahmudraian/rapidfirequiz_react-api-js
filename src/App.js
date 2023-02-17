
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Header/Blog/Blog';

import Home from './Components/Home/Home';
import Question from './Components/Question/Question';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layout/Main';


function App() {
const router=createBrowserRouter([
  {path:"/",element:<Main></Main>,
  children:[
    {
      path:"home",
      loader:()=>fetch(`https://openapi.programming-hero.com/api/quiz`)
      ,element:<Home></Home>
   
    },
    {
      path:"blog",element:<Blog></Blog>
    },
    {
      path:"statistics",element:<Statistics></Statistics>
    },
    {
      path:"/home/:id",
      loader: async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)}
      ,element:<Question></Question>
    }
  ]}


])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
