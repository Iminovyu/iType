import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Цвета соответствующие логотипам технологий
  const tagColors: { [key: string]: string } = {
    // React - синий
    "React": "bg-blue-100 text-blue-800 border border-blue-200",
    "React Native": "bg-blue-100 text-blue-800 border border-blue-200",
    
    // Node.js - зеленый
    "Node.js": "bg-green-100 text-green-800 border border-green-200",
    
    // Next.js - черный
    "Next.js": "bg-black text-white border border-gray-800",
    
    // MongoDB - зеленый
    "MongoDB": "bg-green-100 text-green-800 border border-green-200",
    
    // Vue.js - зеленый
    "Vue.js": "bg-green-100 text-green-800 border border-green-200",
    
    // TypeScript - синий
    "TypeScript": "bg-blue-100 text-blue-800 border border-blue-200",
    
    // Python - синий/желтый (используем синий для консистентности)
    "Python": "bg-blue-100 text-blue-800 border border-blue-200",
    
    // PostgreSQL - синий
    "PostgreSQL": "bg-blue-100 text-blue-800 border border-blue-200",
    
    // Unity - черный
    "Unity": "bg-gray-800 text-white border border-gray-700",
    
    "AR Core": "bg-purple-100 text-purple-800 border border-purple-200",
    
    // WordPress - синий
    "WordPress": "bg-blue-100 text-blue-800 border border-blue-200",
    
    // PHP - фиолетовый
    "PHP": "bg-purple-100 text-purple-800 border border-purple-200",
    
    // Firebase - оранжевый
    "Firebase": "bg-orange-100 text-orange-800 border border-orange-200",
    
    // Категории проектов
    "CRM": "bg-blue-100 text-blue-800 border border-blue-200",
    "E-commerce": "bg-green-100 text-green-800 border border-green-200",
    "Games": "bg-purple-100 text-purple-800 border border-purple-200",
    
    // Другие
    "Web": "bg-gray-100 text-gray-800 border border-gray-300",
    "Finance": "bg-emerald-100 text-emerald-800 border border-emerald-200",
    "Security": "bg-red-100 text-red-800 border border-red-200",
    "Education": "bg-indigo-100 text-indigo-800 border border-indigo-200"
  };

  const projects = [
    {
      id: 1,
      title: "CRM System for Retail",
      description: "Custom CRM solution that increased sales conversion by 45% for a retail chain.",
      category: "crm",
      tags: ["CRM", "React", "Node.js"]
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Scalable online store with integrated payment processing and inventory management.",
      category: "ecommerce", 
      tags: ["E-commerce", "Next.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Mobile Game App",
      description: "Engaging puzzle game with over 100k downloads on app stores.",
      category: "game",
      tags: ["Games", "React Native", "Unity"]
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time business intelligence dashboard with predictive analytics.",
      category: "crm",
      tags: ["CRM", "TypeScript", "Python"]
    },
    {
      id: 5,
      title: "Online Marketplace",
      description: "Multi-vendor e-commerce platform with advanced search and filtering.",
      category: "ecommerce",
      tags: ["E-commerce", "Vue.js", "PostgreSQL"]
    },
    {
      id: 6,
      title: "AR Gaming Experience",
      description: "Augmented reality mobile game with social features and in-app purchases.",
      category: "game",
      tags: ["Games", "Unity", "AR Core"]
    },
    {
      id: 7,
      title: "Corporate Website",
      description: "Modern corporate website with blog and contact management system.",
      category: "other",
      tags: ["Web", "WordPress", "PHP"]
    },
    {
      id: 8,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      category: "other",
      tags: ["Finance", "React Native", "Security"]
    },
    {
      id: 9,
      title: "Educational Platform",
      description: "Online learning platform with video courses and progress tracking.",
      category: "other",
      tags: ["Education", "Vue.js", "Firebase"]
    }
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "crm", label: "CRM" },
    { key: "ecommerce", label: "E-commerce" },
    { key: "game", label: "Game" },
    { key: "mixed", label: "Mixed" }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    if (activeFilter === "mixed") return project.category === "other";
    return project.category === activeFilter;
  });

  const getTagColor = (tag: string) => {
    return tagColors[tag] || "bg-gray-100 text-gray-800 border border-gray-300";
  };

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

        {/* Фильтры */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Контент страницы */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-2 py-1 rounded text-sm font-medium ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
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