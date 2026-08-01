import React from 'react';
import { motion } from 'framer-motion';

const Blogs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-8"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Blogs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-medium text-gray-800 mb-2">Blog Post 1</h4>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;
