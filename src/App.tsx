import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import DataSources from './pages/DataSources'
import Policy from './pages/Policy'
import Impact from './pages/Impact'
import About from './pages/About'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donnees" element={<DataSources />} />
          <Route path="/politique" element={<Policy />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/a-propos" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
