import React from 'react';

export function FeaturedContent() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured</h2>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="aspect-video rounded-lg bg-gray-100 mb-4">
          <img
            src="https://images.unsplash.com/photo-1564121211835-e88c852648ab"
            alt="Featured Islamic Content"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Understanding the Virtues of Ramadan
        </h3>
        <p className="text-gray-600">
          Explore the spiritual significance and blessings of the holy month of Ramadan
          through this comprehensive guide.
        </p>
      </div>
    </section>
  );
}