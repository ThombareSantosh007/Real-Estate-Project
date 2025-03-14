import React from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
  // Sample featured properties data
  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Villa',
      address: '123 Main St, Anytown',
      price: '$1,250,000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      beds: 5,
      baths: 4,
      sqft: 3500
    },
    {
      id: 2,
      title: 'Modern Apartment',
      address: '456 Park Ave, Anytown',
      price: '$450,000',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      beds: 2,
      baths: 2,
      sqft: 1200
    },
    {
      id: 3,
      title: 'Family Home',
      address: '789 Oak St, Anytown',
      price: '$750,000',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      beds: 4,
      baths: 3,
      sqft: 2800
    },
    {
      id: 4,
      title: 'Waterfront Property',
      address: '101 Lake View Dr, Anytown',
      price: '$1,850,000',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      beds: 6,
      baths: 5,
      sqft: 4200
    },
    {
      id: 5,
      title: 'Downtown Condo',
      address: '555 Center St, Anytown',
      price: '$380,000',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      beds: 1,
      baths: 1,
      sqft: 950
    },
    {
      id: 6,
      title: 'Country Estate',
      address: '777 Rural Route, Anytown',
      price: '$2,100,000',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80',
      beds: 7,
      baths: 6,
      sqft: 5500
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Properties
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover our handpicked selection of premium properties that stand out for their exceptional quality and value.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <div key={property.id} className="rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={property.image}
                alt={property.title}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                <p className="text-gray-600">{property.address}</p>
                <div className="mt-4 flex justify-between">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <div>{property.beds} beds</div>
                    <div>{property.baths} baths</div>
                    <div>{property.sqft} sqft</div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-indigo-600 font-bold">{property.price}</span>
                  <Link
                    to={`/products/${property.id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured; 