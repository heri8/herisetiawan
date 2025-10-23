import React from 'react';
import { projects } from '../data/dummyData';
import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();
    const featuredProjects = projects.filter(project => project.featured);

    const ProjectCard = ({ project }) => {
        const navigate = useNavigate();

        const handleViewDetails = () => {
            navigate(`/project/${project.id}`);
        };

        return (
            <div className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
                <div className="h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition duration-500 hover:scale-110"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded">
                            {project.category}
                        </span>
                        {project.featured && (
                            <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
                                Featured
                            </span>
                        )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                +{project.technologies.length - 3}
                            </span>
                        )}
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{project.duration}</span>
                        <button
                            onClick={handleViewDetails}
                            className="text-blue-500 hover:text-blue-700 font-medium text-sm"
                        >
                            Lihat Detail →
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="projects" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Proyek Terbaru</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Beberapa proyek unggulan yang telah saya selesaikan dengan berbagai teknologi modern
                        dan pendekatan kreatif.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => navigate('/projects')}
                        className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
                    >
                        Lihat Semua Proyek
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects
