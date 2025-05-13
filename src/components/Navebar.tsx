import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function NavBar() {
    return (
        <nav className="bg-gray-900 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-bold text-white tracking-wider px-4">
                    <span className="text-red-500">TL TOM</span>{" "}
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-8 text-white text-lg">
                    <a
                        href="#home"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#videos"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Videos
                    </a>
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
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-5 px-4">
                    <a
                        href="https://www.facebook.com/profile.php?id=61561334334086"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-400 transition-colors duration-300"
                    >
                        <FaFacebook size={28} />
                    </a>
                    <a
                        href="https://www.youtube.com/@T.L_TOM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-400 transition-colors duration-300"
                    >
                        <FaYoutube size={28} />
                    </a>
                    <a
                        href="https://chat.whatsapp.com/K1QpbGj56Pg1Tkx6fKVMfj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-400 transition-colors duration-300"
                    >
                        <FaWhatsapp size={28} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
