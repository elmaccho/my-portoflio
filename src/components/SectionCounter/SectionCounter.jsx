import React, { useState, useEffect } from "react";
import './SectionCounter.css';

export default function SectionCounter({ sectionRefs }) {
    const [currentSection, setCurrentSection] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const sections = sectionRefs.current;
            const scrollPosition = window.scrollY + window.innerHeight / 1;
            let current = 1;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = index + 1;
                }
            });

            setCurrentSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionRefs]);

    return (
        <div className="sectioncounter-container">
            <div className="actual-sections">
                {currentSection < 10 ? `0${currentSection}` : currentSection}
            </div>
            <div className="progress-bar"></div>
            <div className="all-sections">04</div>
        </div>
    );
}
