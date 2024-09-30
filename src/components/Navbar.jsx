
import { FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <span className="text-3xl text-gray-300">AK</span>
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/anshul-khanna-6305b4265/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/AnshulKhanna3008/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/anshulkhanna_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaSquareXTwitter />
                </a>
            </div>
        </nav>
    )
}

export default Navbar