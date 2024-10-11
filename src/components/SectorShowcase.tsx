import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const sectors = [
  {
    name: 'Property',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    description: 'Streamline property management and enhance buyer experiences with QR codes for virtual tours, property details, and instant contact information.',
    expandedImage: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Bicycles',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Enhance customer engagement in the cycling industry with QR codes for product information, maintenance guides, and exclusive offers.',
    expandedImage: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80'
  },
  {
    name: 'Car Sales',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Revolutionize the car buying experience with QR codes for vehicle specs, test drive bookings, and financing options.',
    expandedImage: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
  },
  {
    name: 'Motorcycle',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Elevate the motorcycle retail experience with QR codes for specs, maintenance schedules, and rider community events.',
    expandedImage: 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Jewellery',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: 'Enhance the luxury shopping experience with QR codes for product authenticity, care instructions, and personalized styling tips.',
    expandedImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
  },
  {
    name: 'Safety',
    image: 'https://images.unsplash.com/photo-1618090584126-129cd1f3fbae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    description: 'Improve workplace safety and compliance with QR codes for equipment manuals, safety protocols, and emergency procedures.',
    expandedImage: 'https://images.unsplash.com/photo-1604328727766-a151d1045ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
];

const SectorShowcase: React.FC<{ id: string }> = ({ id }) => {
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  const toggleSector = (sectorName: string) => {
    if (expandedSector === sectorName) {
      setExpandedSector(null);
    } else {
      setExpandedSector(sectorName);
    }
  };

  const closeSector = () => {
    setExpandedSector(null);
  };

  return (
    <section id={id} className="py-12 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Choose your sector</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className={`relative cursor-pointer transition-all duration-300 ${
                expandedSector && expandedSector !== sector.name ? 'opacity-30' : ''
              }`}
              onClick={() => toggleSector(sector.name)}
            >
              <img src={sector.image} alt={sector.name} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <span className="text-white text-lg font-semibold">{sector.name}</span>
              </div>
              {expandedSector === sector.name ? (
                <ChevronUp className="absolute bottom-2 right-2 text-white" />
              ) : (
                <ChevronDown className="absolute bottom-2 right-2 text-white" />
              )}
            </div>
          ))}
        </div>
      </div>
      {expandedSector && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-black rounded-lg max-w-3xl w-full relative">
            <button
              onClick={closeSector}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            {sectors.map((sector) => {
              if (sector.name === expandedSector) {
                return (
                  <div key={sector.name} className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{sector.name}</h3>
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={sector.expandedImage}
                        alt={sector.name}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-gray-700 mb-4">{sector.description}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default SectorShowcase;