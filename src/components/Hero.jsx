import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div className="h-screen flex flex-col justify-center items-center text-white bg-gradient-to-b from-black via-gray-900 to-gray-800"
    initial={{opacity:0,y:50,scale:0.9}}
    animate={{opacity:1,y:0,scale:1}}
    transition={{duration:0.8}}
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Hi,I'm Rajesh Kumar G</h1>
      <p className="mt-4 text-lg">Frontend Developer</p>
      <a href="#projects">
        <button className="mt-6 px-6 py-6 bg-blue-500 rounded-xl hover:bg-blue-600">
          View Projects
        </button>
      </a>
    </motion.div>
  );
};

export default Hero;
