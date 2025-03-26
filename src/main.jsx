import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Auth from './components/Auth.jsx'
import UseCase from './components/UseCase.jsx'
import Dashboard from './components/Dashboard.jsx'
import Automate from './components/Automate.jsx'
import Lighting from './components/Concepts/Lighting.jsx'
import SecurityPage from './components/Concepts/SecurityPage.jsx'
import InteractiveHome from './components/Concepts/InteractiveHome.jsx'
import EnergyEfficiency from './components/Concepts/EnergyEfficiency.jsx'
import Protection from './components/Concepts/Protection.jsx'
import Climate from './components/Concepts/Climate.jsx'
import Survillance from './components/Concepts/Survillance.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='/usecase' element={<UseCase/>}/>
      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }/>
      <Route path='/automate' element={<Automate/>}/>
      <Route path='/lighting' element={<Lighting/>}/>
      <Route path='/home-security' element={<SecurityPage/>}/>
      <Route path='/interactive-home' element={<InteractiveHome/>}/>
      <Route path='/energy-efficiency' element={<EnergyEfficiency/>}/>
      <Route path='/protection' element={<Protection/>}/>
      <Route path='/climate' element={<Climate/>}/>
      <Route path='/survillance' element={<Survillance/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
