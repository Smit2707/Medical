import React from "react";
import { UserGroupIcon, HomeIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const Page2 = () => {
  const stats = [
    {
      id: 1,
      icon: <UserGroupIcon className="w-12 h-12 text-blue-500" />,
      count: "+1200",
      label: "Doctors",
      description: "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam."
    },
    {
      id: 2,
      icon: <HomeIcon className="w-12 h-12 text-blue-500" />,
      count: "+1200",
      label: "Clinics",
      description: "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam."
    },
    {
      id: 3,
      icon: <PlusCircleIcon className="w-12 h-12 text-blue-500" />,
      count: "+100",
      label: "Specialist",
      description: "Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam."
    }
  ];

  return (
    <div className="bg-white md:h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-bold text-green-600">
                  {stat.count}
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  {stat.label}
                </span>
              </div>
              <p className="text-gray-600 max-w-sm mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2; 