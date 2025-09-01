
import { FiHome, FiPlus } from 'react-icons/fi'

export default function Properties() {
  const properties = [
    { id: 1, name: 'Beach Villa', location: 'Malibu', type: 'Villa', status: 'Active' },
    { id: 2, name: 'Mountain Cabin', location: 'Aspen', type: 'Cabin', status: 'Active' },
    { id: 3, name: 'City Apartment', location: 'New York', type: 'Apartment', status: 'Maintenance' },
    { id: 4, name: 'Lake House', location: 'Tahoe', type: 'House', status: 'Active' },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Properties</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center">
          <FiPlus className="mr-2" />
          Add Property
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}

const PropertyCard = ({ property }) => {
  const statusColor = property.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <FiHome size={48} className="text-gray-400" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{property.name}</h3>
            <p className="text-gray-500">{property.location}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${statusColor}`}>
            {property.status}
          </span>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-gray-500">Type: <span className="text-gray-800">{property.type}</span></p>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
            Edit
          </button>
          <button className="text-red-600 hover:text-red-800 text-sm font-medium">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
  