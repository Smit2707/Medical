import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const Page6 = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Chief Digital Officer",
      image: "https://images.unsplash.com/photo-1576766125535-b04e15fd0273?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero.",
      rating: 5
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Chief Digital Officer",
      image: "https://images.unsplash.com/photo-1643297654397-97b3201abc7c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero.",
      rating: 5
    },
    {
      id: 3,
      name: "John Doe",
      role: "Chief Digital Officer",
      image: "https://images.unsplash.com/photo-1643297654399-5da3409e302a?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <StarIcon key={index} className="h-5 w-5 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-fit bg-white py-20 relative">
        
      <img 
        src="/src/assets/testimonial-illustration.png" 
        alt="Illustration" 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-auto"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:text-start text-center">
            People's Testimonials
          </h2>
          <p className="text-gray-600 mb-12 md:text-start text-center">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-gray-600 mb-6">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-2 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        <div className="flex justify-center gap-2 mt-12">
          {[...Array(6)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === 0 ? "bg-blue-500" : "bg-gray-300 hover:bg-blue-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2 md:text-start text-center text-white">
              Ready to get started ?
            </h3>
            <p className="text-white/90 md:text-start text-center">
              Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-white text-sm text-blue-600 px-4 py-2 md:text-base rounded-md font-medium hover:bg-blue-50 transition-colors duration-200">
            CREATE APPOINTMENT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page6; 