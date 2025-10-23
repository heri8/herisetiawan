import React from 'react';

function Footer() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }

        return (
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <div className="text-2xl font-bold text-gradient">DevPortfolio</div>
                            <p className="mt-2 text-gray-400">Fullstack Developer & Digital Solution Creator</p>
                        </div>
                        <div className="flex space-x-6">
                            {['home', 'about', 'projects', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="text-gray-400 hover:text-white transition duration-300 capitalize"
                                >
                                    {item === 'home' ? 'Home' :
                                        item === 'about' ? 'Tentang' :
                                            item === 'projects' ? 'Proyek' : 'Kontak'}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                        <p>&copy; 2025 Heri Setiawan. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer
