import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like HTML, CSS, JavaScript, Tailwind, Bootstrap, EJS, React and Next.js, as well as back-end technologies like Node.js, Express.js, MongoDB & also some backend services like Getform.io,Firebase & Appwriter . My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;


export const PROJECTS = [
  {
    title: "E-Commerce Website (Not Live)",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Express js", "Node.js", "MongoDB"],
    link: "",
  },
  {
    title: "Task Management App(TODO List)(Live)",
    image: project2,
    description:
      "A simple task management tool to create, track, and organize daily tasks efficiently. Features include adding, editing, and deleting tasks with a clean user interface.",
    technologies: ["HTML", "CSS", "JS",],
    link: "https://anshulkhanna3008.github.io/todolist/"
  },
  {
    title: "Portfolio Website (Live)",
    image: project3,
    description:
      "A personal portfolio website showcasing skills, projects, and contact information. Built with a modern design to highlight work and provide an easy way to connect.",
    technologies: ["React", "TailwindCSS", "Getform.io"],
    link: "https://main--exquisite-basbousa-cbaf93.netlify.app/"
  },
  {
    title: "Blogging Platform (Not Live)",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Raipur(Chhattisgarh) ",
  email: "khannaanshul30@gmail.com",
};
