import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/dummyData';

function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl text-gray-400 mb-4">
                        <i className="fas fa-exclamation-circle"></i>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-600 mb-4">Proyek Tidak Ditemukan</h2>
                    <button
                        onClick={() => navigate('/projects')}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                    >
                        Kembali ke Portofolio
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            {/* Header Section */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-8">
                    <button
                        onClick={() => navigate('/projects')}
                        className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium mb-6 transition duration-300"
                    >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Kembali ke Portofolio
                    </button>

                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div>
                            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-3">
                                {project.category}
                            </span>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">{project.title}</h1>
                            <p className="text-lg text-gray-600 max-w-3xl">{project.fullDescription}</p>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href={project.demoLink}
                                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
                            >
                                <i className="fas fa-external-link-alt mr-2"></i>
                                Live Demo
                            </a>
                            <a
                                href={project.githubLink}
                                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300 shadow-lg"
                            >
                                <i className="fab fa-github mr-2"></i>
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Featured Image */}
                        <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-96 object-cover"
                            />
                        </div>

                        {/* Project Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Gallery</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {project.gallery.map((image, index) => (
                                        <div key={index} className="rounded-lg overflow-hidden shadow-md">
                                            <img
                                                src={image}
                                                alt={`${project.title} ${index + 1}`}
                                                className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Challenges & Solutions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                    <i className="fas fa-exclamation-triangle text-yellow-500 mr-3"></i>
                                    Tantangan
                                </h3>
                                <ul className="space-y-3">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index} className="flex items-start">
                                            <i className="fas fa-chevron-right text-blue-500 mt-1 mr-3 text-sm"></i>
                                            <span className="text-gray-600">{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                    <i className="fas fa-lightbulb text-green-500 mr-3"></i>
                                    Solusi
                                </h3>
                                <ul className="space-y-3">
                                    {project.solutions.map((solution, index) => (
                                        <li key={index} className="flex items-start">
                                            <i className="fas fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                                            <span className="text-gray-600">{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                            {/* Project Info */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Informasi Proyek</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Kategori:</span>
                                            <span className="font-medium">{project.category}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Klien:</span>
                                            <span className="font-medium">{project.client}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Durasi:</span>
                                            <span className="font-medium">{project.duration}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Status:</span>
                                            <span className="font-medium text-green-500">Selesai</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Teknologi</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Features */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Fitur Utama</h4>
                                    <ul className="space-y-2">
                                        {project.features && project.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-600">
                                                <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                                {feature}
                                            </li>
                                        ))}
                                        {!project.features && (
                                            <>
                                                <li className="flex items-center text-gray-600">
                                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                                    Responsive Design
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                                    Modern UI/UX
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                                                    Optimized Performance
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3">
                                    <a
                                        href={project.demoLink}
                                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 text-center block"
                                    >
                                        <i className="fas fa-external-link-alt mr-2"></i>
                                        Lihat Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-300 text-center block"
                                    >
                                        <i className="fab fa-github mr-2"></i>
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Projects */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8">Proyek Lainnya</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects
                            .filter(p => p.id !== project.id)
                            .slice(0, 3)
                            .map(relatedProject => (
                                <div
                                    key={relatedProject.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
                                    onClick={() => navigate(`/project/${relatedProject.id}`)}
                                >
                                    <div className="h-40 overflow-hidden">
                                        <img
                                            src={relatedProject.image}
                                            alt={relatedProject.title}
                                            className="w-full h-full object-cover transition duration-500 hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">{relatedProject.title}</h4>
                                        <p className="text-gray-600 text-sm line-clamp-2">{relatedProject.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail
