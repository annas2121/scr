
import { FiCalendar, FiDollarSign, FiHome, FiUsers } from 'react-icons/fi'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<FiHome className="text-blue-500" size={24} />} 
          title="Total Properties" 
          value="12" 
          change="+2 this month" 
        />
        <StatCard 
          icon={<FiCalendar className="text-green-500" size={24} />} 
          title="Active Bookings" 
          value="8" 
          change="+3 this week" 
        />
        <StatCard 
          icon={<FiUsers className="text-purple-500" size={24} />} 
          title="Guests This Month" 
          value="24" 
          change="+8 from last month" 
        />
        <StatCard 
          icon={<FiDollarSign className="text-yellow-500" size={24} />} 
          title="Monthly Revenue" 
          value="$4,250" 
          change="+12% from last month" 
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Guest</th>
                <th className="text-left py-3 px-4">Property</th>
                <th className="text-left py-3 px-4">Check-In</th>
                <th className="text-left py-3 px-4">Check-Out</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <TableRow 
                guest="John Smith" 
                property="Beach Villa" 
                checkIn="2023-06-15" 
                checkOut="2023-06-20" 
                status="Confirmed" 
              />
              <TableRow 
                guest="Sarah Johnson" 
                property="Mountain Cabin" 
                checkIn="2023-06-18" 
                checkOut="2023-06-25" 
                status="Pending" 
              />
              <TableRow 
                guest="Michael Brown" 
                property="City Apartment" 
                checkIn="2023-06-22" 
                checkOut="2023-06-28" 
                status="Confirmed" 
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const StatCard = ({ icon, title, value, change }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-gray-100 mr-4">
          {icon}
        </div>
        <div>
          <p className="text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-green-500">{change}</p>
        </div>
      </div>
    </div>
  )
}

const TableRow = ({ guest, property, checkIn, checkOut, status }) => {
  const statusColor = status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
  
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3 px-4">{guest}</td>
      <td className="py-3 px-4">{property}</td>
      <td className="py-3 px-4">{checkIn}</td>
      <td className="py-3 px-4">{checkOut}</td>
      <td className="py-3 px-4">
        <span className={`px-2 py-1 rounded-full text-xs ${statusColor}`}>
          {status}
        </span>
      </td>
    </tr>
  )
}
  