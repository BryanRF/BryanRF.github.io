// components/ProjectModal.js
import React from 'react';

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-4 rounded" />
          <p className="text-gray-600 mb-4">{project.description}</p>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              View Demo
            </a>
          )}
        </div>
        <div className="bg-gray-100 px-6 py-3 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;