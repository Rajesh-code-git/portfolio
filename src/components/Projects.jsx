import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 bg-gray-900 text-white"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card */}
        <div className="bg-black rounded-xl overflow-hidden shadow-lg group">
          
          {/* Image */}
          <div className="relative">
            <div className="h-48 bg-gray-700"></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">

              <a href="#" className="bg-white text-black p-3 rounded-full">
                <FaGithub />
              </a>

              <a href="#" className="bg-blue-500 p-3 rounded-full">
                <FaExternalLinkAlt />
              </a>

            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-xl font-semibold">E-Commerce</h3>
            <p className="text-gray-400">React + Redux</p>
          </div>

        </div>

        {/* Card 2 */}
        <div className="bg-black rounded-xl overflow-hidden shadow-lg group">
          
          <div className="relative">
            <div className="h-48 bg-gray-700"></div>

            <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">

              <a href="#" className="bg-white text-black p-3 rounded-full">
                <FaGithub />
              </a>

              <a href="#" className="bg-blue-500 p-3 rounded-full">
                <FaExternalLinkAlt />
              </a>

            </div>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold">Todo App</h3>
            <p className="text-gray-400">React</p>
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default Projects;