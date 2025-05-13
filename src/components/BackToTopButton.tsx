import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolled down 300px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-500 transition-colors duration-300"
                aria-label="Back to Top"
            >
                <FaArrowUp size={20} />
            </button>
        )
    );
}
