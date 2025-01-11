import React from "react";

const Page4 = () => {
  const specialties = [
    { id: 1, name: "Dentist", active: false },
    { id: 2, name: "Padriatic", active: false },
    { id: 3, name: "Cardiology", active: false },
    { id: 4, name: "Traumatologi", active: true },
    { id: 5, name: "Orthopaedi", active: true },
    { id: 6, name: "Anestesiologi", active: true },
    { id: 7, name: "Reumatologi", active: false },
    { id: 8, name: "Andrologi", active: false },
    { id: 9, name: "Ortodonsia", active: false },
  ];

  return (
    <div className="min-h-[80vh] bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 md:text-start text-center">
              Our Speciality
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl md:text-start text-center">
              Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at.
            </p>
            

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {specialties.map((specialty) => (
                <button
                  key={specialty.id}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    specialty.active
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {specialty.name}
                </button>
              ))}
            </div>
          </div>
          

          <div className="lg:w-1/2">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <img
                src="./src/assets/illu2.png"
                alt="Doctor Specialities"
                className="w-[500px] h-auto rounded-2xl"
              />
              
              <div 
                className="absolute inset-0 border-2 border-blue-200 rounded-2xl -z-10 transform translate-x-4 translate-y-4"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4; 
