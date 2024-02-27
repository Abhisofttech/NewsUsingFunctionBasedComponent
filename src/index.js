import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import News from './Components/News';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} >
      <Route index  element={<News key='general' pageSize={12} category={'science'} />} />
      <Route path='business'  element={<News  key='business' pageSize={12} category={'business'} />} />
      <Route path='entertainment' element={<News   key='entertainment' pageSize={12} category={'entertainment'} />} />
      <Route path='health'  element={<News key='health' pageSize={12}  category={'health'}/>} />
      <Route path='science'  element={<News key='science' pageSize={12} category={'science'} />} />
      <Route path='technology'  element={<News key='technology' pageSize={12} category={'technology'} />} />
      <Route path='sports'  element={<News key='sports' pageSize={12} category={'sports'} />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
