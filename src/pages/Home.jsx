import React from "react";

const Page1 = () => {
    return (
        <div className="min-h-fit pt-20">

            <div
                className="absolute top-0 right-0 w-full h-full z-[100] pointer-events-none opacity-[0.2] md:opacity-[1]"
                style={{
                    backgroundImage: "url('/src/assets/Illustration.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right top",
                    backgroundSize: "contain"
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between">

                    <div className="w-full lg:w-[50%] mb-12 lg:mb-0">
                        <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 mb-6 md:text-start text-center">
                            Empowering Healthcare Solutions
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-lg text-gray-600 mb-8 md:text-start text-center">
                            Delivering innovative solutions to enhance patient care, streamline workflows, and improve healthcare outcomes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-3 md:px-4 md:py-2 md:text-sm md:hover:scale-110 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-300 text-center">
                                MORE INFO
                            </button>
                            <button className="px-8 py-3 md:px-4 md:py-2 md:text-sm md:hover:scale-110 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300 text-center">
                                REGISTER NOW
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

                    <div className="bg-white rounded-xl shadow-lg duration-300 ease-in-out hover:scale-105 transition p-6 shadow-blue-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 lg:text-lg ">
                            Efficient Healthcare Management
                        </h3>
                        <p className="text-gray-600 lg:text-sm">
                            Optimize resources, reduce operational costs, and focus on what matters—your patients.
                        </p>
                        <div className="w-16 h-1 bg-blue-500 mt-4"></div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg duration-300 ease-in-out hover:scale-105 transition p-6 shadow-blue-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 lg:text-lg">
                            Custom Healthcare Solutions
                        </h3>
                        <p className="text-gray-600 lg:text-sm">
                            Get tailored solutions to meet your specific needs, from clinics to hospitals.
                        </p>
                        <div className="w-16 h-1 bg-blue-500 mt-4"></div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg duration-300 ease-in-out hover:scale-105 transition p-6 shadow-blue-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 lg:text-lg">
                            Trusted by Professionals

                        </h3>
                        <p className="text-gray-600 lg:text-sm">
                            Join thousands of healthcare providers using our platform to revolutionize their services.
                        </p>
                        <div className="w-16 h-1 bg-blue-500 mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1; 
