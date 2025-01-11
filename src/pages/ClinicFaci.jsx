import React from "react";
import { ArrowLeftIcon, ArrowRightIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const ClinicFaci = () => {
  const facilities = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus.",
      image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      description: "Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus.",
      image: "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-[60vh] bg-white pt-20">
        
      <div 
        className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/src/assets/curved-line.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "contain"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold md:text-start text-center text-gray-900 mb-4">
              Clinic Facilities
            </h2>
            <p className="text-gray-600 md:text-start text-center">
              Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="p-2 rounded-full hidden md:inline border border-gray-300 hover:bg-blue-50 transition">
              <ArrowLeftIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hidden md:inline border border-gray-300 hover:bg-blue-50 transition">
              <ArrowRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {facilities.map((facility) => (
            <div 
              key={facility.id}
              className=" rounded-xl bg-slate-50 shadow-sm hover:shadow-md transition p-4 hover:scale-105 duration-300 ease-in-out max-w-[350px] w-full"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {facility.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {facility.description}
              </p>
              <button className="bg-green-500 text-white px-4 py-1.5 rounded-md hover:bg-green-600 transition text-sm">
                SEE DETAIL
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end mt-8">
          <a 
            href="#" 
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            SEE ALL
            <ArrowRightCircleIcon className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClinicFaci; 