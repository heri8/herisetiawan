import React from 'react';
import { personalInfo } from '../data/dummyData';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="gradient-bg pt-24 pb-16 md:pt-32 md:pb-24 text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            Hi, I'm <span className="text-yellow-300">{personalInfo.name}</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">
                            {personalInfo.title}
                        </h2>
                        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                            {personalInfo.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-105"
                            >
                                View Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg transform hover:scale-105"
                            >
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center animate-slide-up">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <img
                                    src="img/foto_profil.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover transform"
                                />
                            </div>

                            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-semibold shadow-lg">
                                Available for Freelance
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;