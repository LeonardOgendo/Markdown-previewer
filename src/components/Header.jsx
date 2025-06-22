// Create a React Header component
// Style using Tailwind classes
// The component should have a nav brand with text "GDeditor", and below on two tabs flexing horizontally, with text "Editor" to the left and "Previewer" to the right
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaM } from "react-icons/fa6";

const Header = () => {
    return (
        <nav className="flex justify-between bg-gray-800 p-4">
            <h1 className="text-white text-2xl font-bold">GDeditor</h1>
            <span className="text-white"><FaMoon /></span>
        </nav>
    );
};

export default Header;    