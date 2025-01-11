import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Page7 = () => {
  const clinics = [
    {
      id: 1,
      name: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@ikul.com",
      address: "Lorem ipsum street no 14 Block A",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@ikul.com",
      address: "Lorem ipsum street no 14 Block A",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@ikul.com",
      address: "Lorem ipsum street no 14 Block A",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      name: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@ikul.com",
      address: "Lorem ipsum street no 14 Block A",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 5,
      name: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@ikul.com",
      address: "Lorem ipsum street no 14 Block A",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 6,
      name: "Head Quarter",
      phone: "+123 456 78 91",
      email: "hello@ikul.com",
      address: "Lorem ipsum street no 14 Block A",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-h-fit bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Clinics
          </h2>
          <p className="text-gray-600">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className=" rounded-xl shadow-sm hover:shadow transition-shadow duration-200 p-3 bg-sky-50"
            >
              <div className="flex gap-4 h-full">
                <div className="w-24 h-full flex-shrink-0">
                  <img
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                

                <div className="flex-1">
                  <h3 className="text-sm md:text-xl md:font-semibold font-medium text-gray-900 mb-1">
                    {clinic.name}
                  </h3>
                  

                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-gray-600 text-xs md:text-sm">
                      <PhoneIcon className="h-3 w-3 text-gray-400" />
                      <span>{clinic.phone}</span>
                      <span className="text-blue-500 ml-1">{clinic.email}</span>
                    </div>
                    <div className="flex items-start gap-1 text-gray-600 text-xs md:text-sm">
                      <MapPinIcon className="h-3 w-3 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>{clinic.address}</span>
                    </div>
                  </div>

                  <button className="mt-2 w-full bg-white text-green-600 border border-green-500 px-3 py-1 rounded text-xs font-medium hover:bg-green-50 transition-colors duration-200 uppercase">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page7; 