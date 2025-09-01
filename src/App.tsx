
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { FiHome, FiCalendar, FiUsers, FiSettings, FiDollarSign, FiPieChart } from 'react-icons/fi'
import Dashboard from './components/Dashboard'
import Properties from './components/Properties'
import Bookings from './components/Bookings'
import Guests from './components/Guests'
import Reports from './components/Reports'
import Settings from './components/Settings'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-indigo-800 text-white transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">Homestay</h1>}
          <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-indigo-700">
            {sidebarOpen ? '«' : '»'}
          </button>
        </div>
        <nav className="mt-8">
          <NavLink to="/" icon={<FiHome />} text="Dashboard" expanded={sidebarOpen} />
          <NavLink to="/properties" icon={<FiDollarSign />} text="Properties" expanded={sidebarOpen} />
          <NavLink to="/bookings" icon={<FiCalendar />} text="Bookings" expanded={sidebarOpen} />
          <NavLink to="/guests" icon={<FiUsers />} text="Guests" expanded={sidebarOpen} />
          <NavLink to="/reports" icon={<FiPieChart />} text="Reports" expanded={sidebarOpen} />
          <NavLink to="/settings" icon={<FiSettings />} text="Settings" expanded={sidebarOpen} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/guests" element={<Guests />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

const NavLink = ({ to, icon, text, expanded }) => {
  return (
    <Link to={to} className="block">
      <div className={`flex items-center p-4 hover:bg-indigo-700 cursor-pointer`}>
        <div className="text-xl">{icon}</div>
        {expanded && <span className="ml-4">{text}</span>}
      </div>
    </Link>
  )
}

export default App
  