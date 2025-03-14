import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Products = () => {
  const { id } = useParams();

  // Sample property data (in a real app, this would come from an API or database)
  const propertyData = {
    id: id,
    title: 'Luxury Villa',
    address: '123 Main St, Anytown',
    price: '$1,250,000',
    description: 'A stunning luxury villa with modern design and premium finishes throughout.',
    details: 'This exceptional property offers spacious living areas, high ceilings, and abundant natural light. The gourmet kitchen features top-of-the-line appliances and custom cabinetry. The primary suite includes a spa-like bathroom and walk-in closet.',
    features: [
      '5 bedrooms',
      '4 bathrooms',
      '3,500 sq ft',
      'Built in 2020',
      'Double garage',
      'Swimming pool',
      'Landscaped garden',
      'Smart home system'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    ],
    agent: {
      name: 'John Smith',
      phone: '(123) 456-7890',
      email: 'john.smith@mahavastu.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
  };

  return (
    <div className="bg-white">
      <div className="relative">
        <img
          className="w-full h-96 object-cover"
          src={propertyData.image}
          alt={propertyData.title}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">{propertyData.title}</h1>
            <p className="mt-2 text-xl">{propertyData.address}</p>
            <p className="mt-4 text-2xl font-bold">{propertyData.price}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">Property Details</h2>
            <p className="mt-4 text-lg text-gray-500">{propertyData.description}</p>
            <p className="mt-4 text-lg text-gray-500">{propertyData.details}</p>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">Features</h3>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {propertyData.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">Gallery</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {propertyData.gallery.map((image, index) => (
                  <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">Location</h3>
              <div className="mt-4 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  title="Property location"
                  className="w-full h-96 border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151464843!2d-73.98784492426815!3d40.75798597138413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710400000000!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
              <div className="flex items-center">
                <img
                  className="h-16 w-16 rounded-full mr-4"
                  src={propertyData.agent.image}
                  alt={propertyData.agent.name}
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{propertyData.agent.name}</h3>
                  <p className="text-gray-500">Property Agent</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>{propertyData.agent.phone}</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{propertyData.agent.email}</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Contact Agent
                </Link>
              </div>
              <div className="mt-4">
                <button
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Schedule Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
