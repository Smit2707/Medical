import React, { useState } from "react";
import { ChatBubbleLeftIcon, ClockIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";

const Page5 = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const specialties = [
    "All",
    "Orthopedic",
    "Nutritionist",
    "Pediatric",
    "Anaesthestic"
  ];

  const doctors = [
    {
      id: 1,
      name: "dr. Jena Doe",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years",
      image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "dr. Jean Doe",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years",
      image: "https://images.unsplash.com/photo-1605684954998-685c79d6a018?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "dr. John Doe",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years",
      image: "https://images.unsplash.com/photo-1612276529418-52e6ad86ee1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "dr. James Doe",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years",
      image: "https://images.unsplash.com/photo-1576766125535-b04e15fd0273?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "dr. Jim Doe",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years",
      image: "https://images.unsplash.com/photo-1643297654397-97b3201abc7c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "dr. Joana Doe",
      specialty: "Pediatric Surgeon",
      rating: "95%",
      experience: "4 Years",
      image: "https://images.unsplash.com/photo-1643297654399-5da3409e302a?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-fit bg-white py-10 relative">
        <img className="w-90 h-90 absolute right-[0] bottom-[15%]" src="/src/assets/Background.png" alt="" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Title */}
        <h2 className="text-2xl md:hidden font-bold text-gray-900 mb-4 text-center">
          Ask Doctors
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Desktop */}
          <div className="hidden md:block md:w-64 flex-shrink-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ask<br />Doctors
            </h2>
            <nav className="space-y-2">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedSpecialty === specialty
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Horizontal Scroll Categories */}
          <div className="md:hidden overflow-x-auto pb-4 mb-4 -mx-4 px-4">
            <div className="flex space-x-2 min-w-max">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors duration-200 ${
                    selectedSpecialty === specialty
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 z-10"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                      <p className="text-sm text-gray-500">{doctor.specialty}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <HandThumbUpIcon className="h-5 w-5 text-gray-400" />
                        <span className="text-sm text-gray-600">{doctor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-5 w-5 text-gray-400" />
                        <span className="text-sm text-gray-600">{doctor.experience}</span>
                      </div>
                    </div>
                    <button className="bg-green-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-green-600 transition-colors duration-200 flex items-center gap-1">
                      <ChatBubbleLeftIcon className="h-4 w-4" />
                      CHAT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5; 