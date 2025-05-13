// import { FaFacebook, FaYoutube, FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                {/* Footer Description */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                        TL TOM Channel
                    </h2>
                    <p className="text-lg mb-4">
                        Epic Gamer is dedicated to bringing you the latest and
                        greatest in gaming content. From gameplay tutorials to
                        live streams, we offer engaging and informative videos
                        to enhance your gaming experience. Let's game on and
                        explore new worlds together!
                    </p>
                    <p className="text-md">
                        Contact us:{" "}
                        <a
                            href="mailto:mitali@codingartistweb.com"
                            className="text-red-500 hover:underline"
                        >
                            aymanc366@gmail.com
                        </a>
                    </p>
                </div>

                {/* Footer Links */}
                <div className="flex justify-center gap-8 mb-8 text-lg">
                    <a
                        href="#about"
                        className="hover:text-red-500 transition duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Contact
                    </a>
                    <a
                        href="#faq"
                        className="hover:text-red-500 transition duration-300"
                    >
                        FAQ
                    </a>
                    <a
                        href="#privacy"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Privacy Policy
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Epic Gamer Channel. All
                    Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
