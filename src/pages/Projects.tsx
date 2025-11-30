import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Image } from "lucide-react";
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
    React: "bg-blue-100 text-blue-800 border border-blue-200",
    "React Native": "bg-blue-100 text-blue-800 border border-blue-200",

    // Node.js - зеленый
    "Node.js": "bg-green-100 text-green-800 border border-green-200",

    // Next.js - черный
    "Next.js": "bg-black text-white border border-gray-800",

    // MongoDB - зеленый
    MongoDB: "bg-green-100 text-green-800 border border-green-200",

    // Vue.js - зеленый
    "Vue.js": "bg-green-100 text-green-800 border border-green-200",

    // TypeScript - синий
    TypeScript: "bg-blue-100 text-blue-800 border border-blue-200",

    // Python - синий/желтый (используем синий для консистентности)
    Python: "bg-blue-100 text-blue-800 border border-blue-200",

    // PostgreSQL - синий
    PostgreSQL: "bg-blue-100 text-blue-800 border border-blue-200",

    // Unity - черный
    Unity: "bg-gray-800 text-white border border-gray-700",

    "AR Core": "bg-purple-100 text-purple-800 border border-purple-200",

    // WordPress - синий
    WordPress: "bg-blue-100 text-blue-800 border border-blue-200",

    // PHP - фиолетовый
    PHP: "bg-purple-100 text-purple-800 border border-purple-200",
    CSS: "bg-blue-50 text-blue-900 border border-blue-200",

    // Firebase - оранжевый
    Firebase: "bg-orange-100 text-orange-800 border border-orange-200",
    HTML: "bg-orange-100 text-orange-800 border border-orange-200",
    JavaScript: "bg-yellow-100 text-yellow-800 border border-yellow-200",

    // Категории проектов
    CRM: "bg-blue-100 text-blue-800 border border-blue-200",
    "E-commerce": "bg-green-100 text-green-800 border border-green-200",
    Games: "bg-purple-100 text-purple-800 border border-purple-200",
    Music: "bg-pink-100 text-pink-800 border border-pink-200",

    // Другие
    Web: "bg-gray-100 text-gray-800 border border-gray-300",
    Finance: "bg-emerald-100 text-emerald-800 border border-emerald-200",
    Security: "bg-red-100 text-red-800 border border-red-200",
    Education: "bg-indigo-100 text-indigo-800 border border-indigo-200",
  };

  const projects = [
    {
      id: 1,
      title: "Litech CRM",
      description:
        "CRM system designed for IT academie to manage students, courses, and educational workflows.",
      category: "crm",
      tags: ["CRM", "Education", "React", "Node.js"],
      link: "https://litech-crm.vercel.app/",
      external: true,
      hasImages: true,
      images: [
        "/litech-crm.png",
        "/litech-crm-2.png",
        "/litech-crm-3.png",
      ],
    },
    {
      id: 3,
      title: "CSS Color Game",
      description:
        "Interactive browser game for learning CSS colors through fun challenges.",
      category: "game",
      tags: ["Games", "CSS", "React"],
      link: "https://css-color-game.vercel.app/",
      external: true,
    },
    {
      id: 4,
      title: "Emulator",
      description:
        "Collection of nostalgic games built for modern web browsers.",
      category: "game",
      tags: ["Games", "React"],
      link: "https://emulator-self.vercel.app/",
      external: true,
    },
    {
      id: 5,
      title: "Drify Space",
      description:
        "Space-themed browser game with immersive gameplay and cosmic exploration.",
      category: "game",
      tags: ["Games", "React"],
      link: "https://drify-space.vercel.app/",
      external: true,
    },
    {
      id: 6,
      title: "Pokemon Box Game",
      description:
        "Simple and fun browser game where you open boxes to discover random Pokemons.",
      category: "game",
      tags: ["Games", "HTML", "JavaScript"],
      link: "https://pokemon-game-itype.vercel.app/",
      external: true,
    },
    {
      id: 7,
      title: "Brick Breaker Game",
      description:
        "Classic brick breaker arcade game with smooth controls and multiple levels.",
      category: "game",
      tags: ["Games", "React"],
      link: "https://brick-breaker-itype.vercel.app/",
      external: true,
    },
    {
      id: 8,
      title: "Focus Timer with Animals",
      description:
        "Productivity website with focus timer and calming animal animations.",
      category: "other",
      tags: ["Timer", "React"],
      link: "https://focus-anim.vercel.app/",
      external: true,
    },
    {
      id: 9,
      title: "Music Player",
      description:
        "Web-based music player with playlist management and audio controls.",
      category: "other",
      tags: ["Music", "React"],
      link: "https://music-player-itype.vercel.app/",
      external: true,
    },
    {
      id: 10,
      title: "Earworm Studio",
      description:
        "Interactive music studio website for creating audio tracks.",
      category: "other",
      tags: ["Music", "React"],
      link: "https://earworm-studio.vercel.app/",
      external: true,
    },
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "crm", label: "CRM" },
    { key: "ecommerce", label: "E-commerce" },
    { key: "game", label: "Game" },
    { key: "other", label: "Other" },
  ];

  const filteredProjects = projects.filter((project) => {
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
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded text-sm font-medium ${getTagColor(
                      tag
                    )}`}
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
                  {projects.find((p) => p.id === selectedProject)?.title} -
                  Screenshots
                </h3>
                <button
                  onClick={closeImageModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="grid gap-4">
                {projects
                  .find((p) => p.id === selectedProject)
                  ?.images?.map((image, index) => (
                    <div
                      key={index}
                      className="border rounded-lg overflow-hidden"
                    >
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
