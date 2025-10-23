import React, { useEffect, useRef } from 'react';
import { technicalSkills, professionalSkills, technologies } from '../data/dummyData';

function Skills() {
    const SkillBar = ({ skill, index, color = 'bg-blue-500' }) => {
        const progressRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                if (progressRef.current) {
                                    progressRef.current.style.width = `${skill.percentage}%`;
                                }
                            }, index * 200);
                        }
                    });
                },
                { threshold: 0.5 }
            );

            if (progressRef.current) {
                observer.observe(progressRef.current);
            }

            return () => {
                if (progressRef.current) {
                    observer.unobserve(progressRef.current);
                }
            };
        }, [skill.percentage, index]);

        return (
            <div>
                <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                    <div
                        ref={progressRef}
                        className={`skill-progress ${color} w-0 transition-all duration-1000 ease-in-out`}
                    ></div>
                </div>
            </div>
        );
    }

    return (
        <section id="skills" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Keahlian Saya</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Technical Skills */}
                    <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                        <h3 className="text-xl font-semibold mb-6 flex items-center">
                            <i className="fas fa-laptop-code text-blue-500 mr-3"></i> Teknikal
                        </h3>
                        <div className="space-y-4">
                            {technicalSkills.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Professional Skills */}
                    <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                        <h3 className="text-xl font-semibold mb-6 flex items-center">
                            <i className="fas fa-user-tie text-blue-500 mr-3"></i> Profesional
                        </h3>
                        <div className="space-y-4">
                            {professionalSkills.map((skill, index) => (
                                <SkillBar key={skill.name} skill={skill} index={index} color="bg-green-500" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools & Technologies */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-center mb-8">Teknologi yang Saya Kuasai</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {technologies.map((tech) => (
                            <div key={tech.name} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center card-hover">
                                <i className={`${tech.icon} ${tech.color} text-4xl mb-2`}></i>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills
