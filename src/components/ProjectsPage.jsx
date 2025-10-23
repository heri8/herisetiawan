import React, { useState } from 'react';
import { projects, projectCategories } from '../data/dummyData';
import { useNavigate } from 'react-router-dom';

function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [visibleProjects, setVisibleProjects] = useState(6);
    const navigate = useNavigate();

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 3);
    };

    const handleProjectClick = (projectId) => {
        navigate(`/project/${projectId}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Portofolio Proyek</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Jelajahi berbagai proyek yang telah saya kerjakan, dari pengembangan web hingga aplikasi mobile.
                        Setiap proyek memiliki cerita dan tantangan uniknya sendiri.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {projectCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setVisibleProjects(6);
                            }}
                            className={`px-6 py-2 rounded-full font-medium transition duration-300 ${activeCategory === category
                                    ? 'bg-blue-500 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredProjects.slice(0, visibleProjects).map(project => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
                            onClick={() => handleProjectClick(project.id)}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-blue-500 bg-blue-50 px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    {project.featured && (
                                        <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map(tech => (
                                        <span
                                            key={tech}
                                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{project.duration}</span>
                                    <button className="text-blue-500 hover:text-blue-700 font-medium text-sm">
                                        Lihat Detail →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleProjects < filteredProjects.length && (
                    <div className="text-center">
                        <button
                            onClick={loadMoreProjects}
                            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
                        >
                            Load More Projects
                        </button>
                    </div>
                )}

                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">
                            <i className="fas fa-folder-open"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada proyek</h3>
                        <p className="text-gray-500">Tidak ada proyek yang ditemukan untuk kategori ini.</p>
                    </div>
                )}

                {/* Projects Stats */}
                <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-500 mb-2">{projects.length}+</div>
                            <div className="text-gray-600">Total Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-500 mb-2">
                                {projects.filter(p => p.category === 'Web Development').length}
                            </div>
                            <div className="text-gray-600">Web Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-500 mb-2">
                                {projects.filter(p => p.featured).length}
                            </div>
                            <div className="text-gray-600">Featured</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
                            <div className="text-gray-600">Technologies</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage
