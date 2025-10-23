import React, { useState, useEffect } from 'react';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`w-10 h-10 p-0 fixed bottom-6 right-6 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}

export default BackToTop
