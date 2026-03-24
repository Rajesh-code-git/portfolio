import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiCss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="py-20 px-8 bg-black text-white flex flex-wrap gap-3">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        <span className="bg-gray-800 px-4 py-2 rounded hover:scale-105 hover:bg-blue-500/10 transition duration-300">
          <FaReact size={20} className="text-blue-400" />
          React
        </span>
        <span className="bg-gray-800 px-4 py-2 rounded hover:scale-105 hover:bg-blue-500/10 transition duration-300">
          <SiJavascript size={20} className="text-yellow-400" />
          JavaScript
        </span>
        <span className="bg-gray-800 px-4 py-2 rounded hover:scale-105 hover:bg-blue-500/10 transition duration-300">
          <SiHtml5 size={20} className="text-orange-400" />
          HTML
        </span>
        <span className="bg-gray-800 px-4 py-2 rounded hover:scale-105 hover:bg-blue-500/10 transition duration-300">
          <SiCss size={20} className="text-blue-400" />
          CSS
        </span>
      </div>
    </div>
  );
};

export default Skills;
