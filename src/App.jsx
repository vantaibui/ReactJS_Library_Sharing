import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import reactLogo from './assets/react.svg'
import ItemList from './components/common/item-list'
import FormControls from './components/form-controls'
import AppLayout from './components/layout/app-layout'
import About from './pages/about'
const LazyHome = React.lazy(() => import("./pages/home"))

function App() {
  const [count, setCount] = useState(0)
  console.log("render");
  // return (<BrowserRouter>
  //   <Router/>
  // </BrowserRouter>)
  const handleEvent = () => {
    console.log("Click me!");
  }
  const [conditionalRendering, setConditionalRendering] = useState(false)

  const handleRenderElement = (condition) => {
    if(condition) {
      return <h1>Welcome back!</h1>
    } else {
      return <h1>Please sign up.</h1>
    }
  };

  const numbers = [1, 2, 3, 4, 5, 6];
  const handleRenderList = (list) => {
    return list.map((item, index) => {
      return <ItemList key={index} item={item} />
    })
  };
  

  return (
    <div className="App">
      <button onClick={() => handleEvent()}>Click me!</button>
      <React.Fragment>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </React.Fragment>
      <FormControls />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
          </Route>
          <Route path='/' element={<AppLayout />} >
            <Route index element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <LazyHome />
              </React.Suspense>
            } />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App
