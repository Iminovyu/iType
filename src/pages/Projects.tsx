import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок и навигация */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600">
            Explore our complete portfolio of successful projects across various
            industries and technologies.
          </p>
        </div>

        {/* Контент страницы */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Пример карточки проекта */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">
              CRM System for Retail
            </h3>
            <p className="text-gray-600 mb-4">
              Custom CRM solution that increased sales conversion by 45% for a
              retail chain.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                CRM
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                React
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                Node.js
              </span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">E-commerce Platform</h3>
            <p className="text-gray-600 mb-4">
              Scalable online store with integrated payment processing and
              inventory management.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                E-commerce
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                Next.js
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                MongoDB
              </span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">Mobile Game App</h3>
            <p className="text-gray-600 mb-4">
              Engaging puzzle game with over 100k downloads on app stores.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                Games
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                React Native
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                Unity
              </span>
            </div>
          </div>

          {/* Добавьте больше проектов по необходимости */}
        </div>

        {/* CTA секция */}
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can bring your ideas to life.
          </p>
          <Link
            to="/"
            state={{ scrollToContact: true }}
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
