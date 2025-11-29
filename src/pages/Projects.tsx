import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Image, Lock } from "lucide-react";
import { useState, useEffect } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Прокрутка наверх при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Модальное окно для изображений
  const openImageModal = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const closeImageModal = () => {
    setSelectedProject(null);
  };

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
      tags: ["CRM", "React", "Node.js"],
      link: "/projects/crm-retail",
      external: false,
      hasImages: true,
      images: ["/images/projects/crm-1.jpg", "/images/projects/crm-2.jpg"]
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Scalable online store with integrated payment processing and inventory management.",
      category: "ecommerce", 
      tags: ["E-commerce", "Next.js", "MongoDB"],
      link: "/projects/ecommerce-platform",
      external: false,
      hasImages: true,
      images: ["/images/projects/ecommerce-1.jpg", "/images/projects/ecommerce-2.jpg"]
    },
    {
      id: 3,
      title: "Mobile Game App",
      description: "Engaging puzzle game with over 100k downloads on app stores.",
      category: "game",
      tags: ["Games", "React Native", "Unity"],
      link: "https://play.google.com/store/apps/details?id=com.example.game",
      external: true,
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time business intelligence dashboard with predictive analytics.",
      category: "crm",
      tags: ["CRM", "TypeScript", "Python"],
      link: "/projects/analytics-dashboard",
      external: false,
      hasImages: true,
      images: ["/images/projects/analytics-1.jpg", "/images/projects/analytics-2.jpg"]
    },
    {
      id: 5,
      title: "Online Marketplace",
      description: "Multi-vendor e-commerce platform with advanced search and filtering.",
      category: "ecommerce",
      tags: ["E-commerce", "Vue.js", "PostgreSQL"],
      link: "https://marketplace-example.com",
      external: true,
      hasImages: false
    },
    {
      id: 6,
      title: "AR Gaming Experience",
      description: "Augmented reality mobile game with social features and in-app purchases.",
      category: "game",
      tags: ["Games", "Unity", "AR Core"],
      link: "/projects/ar-gaming",
      external: false,
      hasImages: true,
      images: ["/images/projects/ar-1.jpg", "/images/projects/ar-2.jpg"]
    },
    {
      id: 7,
      title: "Corporate Website",
      description: "Modern corporate website with blog and contact management system.",
      category: "other",
      tags: ["Web", "WordPress", "PHP"],
      link: "https://corporate-example.com",
      external: true,
      hasImages: false
    },
    {
      id: 8,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      category: "other",
      tags: ["Finance", "React Native", "Security"],
      link: "/projects/banking-app",
      external: false,
      hasImages: true,
      images: ["/images/projects/banking-1.jpg", "/images/projects/banking-2.jpg"]
    },
    {
      id: 9,
      title: "Educational Platform",
      description: "Online learning platform with video courses and progress tracking.",
      category: "other",
      tags: ["Education", "Vue.js", "Firebase"],
      link: "https://learn-example.com",
      external: true,
      hasImages: false
    }
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "crm", label: "CRM" },
    { key: "ecommerce", label: "E-commerce" },
    { key: "game", label: "Game" },
    { key: "other", label: "Other" }
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
            <div key={project.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex flex-col">
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-2 py-1 rounded text-sm font-medium ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Кнопки действий */}
              <div className="flex gap-2 flex-wrap">
                {/* Кнопка View Images */}
                {project.hasImages && (
                  <button
                    onClick={() => openImageModal(project.id)}
                    className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                  >
                    <Image className="h-3 w-3" />
                    View Images
                  </button>
                )}
                
                {/* Кнопка View Project */}
                {project.external ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View Project
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View Project
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                )}
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

      {/* Модальное окно для изображений */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  {projects.find(p => p.id === selectedProject)?.title} - Screenshots
                </h3>
                <button
                  onClick={closeImageModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid gap-4">
                {projects.find(p => p.id === selectedProject)?.images?.map((image, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={closeImageModal}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;