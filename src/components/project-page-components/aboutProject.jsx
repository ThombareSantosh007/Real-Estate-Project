import React from 'react';
import { useParams, Link } from 'react-router-dom';

const AboutProject = () => {
  const { id } = useParams();

  // Sample project data (in a real app, this would come from an API or database)
  const projectData = {
    id: id,
    title: 'Luxury Residential Complex',
    location: 'Downtown, Anytown',
    description: 'A premium residential development featuring modern architecture and state-of-the-art amenities.',
    details: 'This exclusive development offers a range of luxury apartments and penthouses designed for modern living. Residents will enjoy access to a private gym, swimming pool, landscaped gardens, and 24/7 security.',
    features: [
      'Spacious floor plans',
      'High-end finishes',
      'Energy-efficient appliances',
      'Smart home technology',
      'Floor-to-ceiling windows',
      'Private balconies',
      'Secure parking',
      'Community spaces'
    ],
    amenities: [
      'Swimming pool',
      'Fitness center',
      'Rooftop garden',
      'Concierge service',
      'Business center',
      'Children\'s play area',
      'Pet-friendly spaces',
      'EV charging stations'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ],
    developer: 'MahaVastu Development Group',
    completion: '2023',
    status: 'Under Construction',
    units: '120',
    price: 'Starting from $450,000'
  };

  return (
    <div className="bg-white">
      <div className="relative">
        <img
          className="w-full h-96 object-cover"
          src={projectData.image}
          alt={projectData.title}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">{projectData.title}</h1>
            <p className="mt-2 text-xl">{projectData.location}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">About the Project</h2>
            <p className="mt-4 text-lg text-gray-500">{projectData.description}</p>
            <p className="mt-4 text-lg text-gray-500">{projectData.details}</p>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">Features</h3>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectData.features.map((feature, index) => (
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
              <h3 className="text-2xl font-bold text-gray-900">Amenities</h3>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectData.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">Gallery</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectData.gallery.map((image, index) => (
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
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-bold text-gray-900">Project Details</h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm text-gray-500">Developer</p>
                <p className="font-medium">{projectData.developer}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Completion Date</p>
                <p className="font-medium">{projectData.completion}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">{projectData.status}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Number of Units</p>
                <p className="font-medium">{projectData.units}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Price Range</p>
                <p className="font-medium">{projectData.price}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Inquire About This Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject; 