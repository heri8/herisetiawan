import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // PERBAIKAN: Menghapus manipulasi document.body.style.overflow
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto'; // BARIS INI DIHAPUS
    };

    // PERBAIKAN: Menghapus manipulasi document.body.style.overflow
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'auto'; // BARIS INI DIHAPUS
    };

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
        closeMobileMenu();
    };

    const handleNavigation = (path) => {
        navigate(path);
        closeMobileMenu();
    };

    const navItems = [
        { key: 'home', label: 'Home', action: () => handleNavigation('/') },
        { key: 'about', label: 'About', action: () => scrollToSection('about') },
        { key: 'skills', label: 'Skills', action: () => scrollToSection('skills') },
        { key: 'projects', label: 'Projects', action: () => handleNavigation('/projects') },
        { key: 'contact', label: 'Contact', action: () => scrollToSection('contact') }
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
            }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <button
                    onClick={() => handleNavigation('/')}
                    className="text-2xl font-bold text-gradient hover:opacity-80 transition duration-300"
                >
                    Heri Setiawan
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={item.action}
                            className="nav-link font-medium text-gray-700 hover:text-blue-500 transition duration-300"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-gray-600 p-2"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-menu md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center mb-8">
                    <div className="text-xl font-bold text-gradient">Heri Setiawan</div>
                    <button onClick={closeMobileMenu} className="text-gray-600 p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={item.action}
                            className="nav-link font-medium text-gray-700 text-left hover:text-blue-500 transition duration-300 py-2"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={closeMobileMenu}
                />
            )}
        </header>
    );
};

export default Header;