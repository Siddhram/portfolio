import project1 from "../assets/projects/cookbook.png";
import project2 from "../assets/projects/doj.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/pdfai.png";
import project5 from "../assets/projects/mechat.png";
import payment from '../assets/projects/payment.avif';

export const HERO_CONTENT = `I am a dedicated full-stack developer with a strong focus on Flutter and a comprehensive tech stack. My expertise spans front-end technologies including React.js and Flutter, and back-end technologies such as Node.js, MongoDB, and Firebase. With hands-on experience in building innovative and scalable applications, I aim to leverage my skills to deliver exceptional user experiences and drive business growth through dynamic, cutting-edge solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for building efficient, AI-powered, and user-centric applications. My experience includes working extensively with technologies like Flutter, React.js, Node.js, MongoDB, Firebase, and Express.js. 
 From creating AI-based virtual assistants for the Department of Justice to developing real-time chat applications like Me Chat and AI-driven cookbook apps, I specialize in solving complex problems and crafting innovative solutions. I thrive in collaborative environments and continuously push the boundaries of technology by staying updated on the latest trends and exploring new tools.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "CookBook",
    image: project1,
    description:
      "The cookbook is the world’s first AI-powered chef guide, solving recipe challenges by using image and prompt recognition to deliver personalized cooking solutions. It leverages advanced AI to enhance recipe development and address culinary issues efficiently.",
    technologies: ["Flutter", "Nodejs", "Generative AI", "Firebase", "GOOgle Cloud"],
  },
  {
    title: "Department of Justice",
    image: project2,
    description:
      "The Department of Justice App virtual assistant provides information on job vacancies, including judicial and other roles. It offers guidance on legal processes, case status updates, and public safety alerts. Additionally, it helps users access legal resources, contact information, and answers frequently asked questions.",
    technologies: ["Flutter", "Nodejs", "Google Cloud", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "PDF AI",
    image: project4,
    description:
      "PDF AI is an advanced AI-powered bot that recognizes and interprets content within PDF documents, providing accurate and contextually relevant responses based on the extracted information. It enhances document interactions by delivering intelligent insights and answers from the content of the PDFs.",
    technologies: ["Flutter", "NOdejs", "Google Cloud", "Firebase"],
  },
  {
    title: "Me Chat",
    image: project5,
    description:
      "Me-Chat is a sophisticated real-time messaging application that leverages a live database for seamless and instantaneous communication. It offers users real-time updates on conversation history and facilitates dynamic, interactive interactions. By utilizing advanced data synchronization, the app ensures a smooth and continuous chat experience.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Money Transfer Web Application",  // New project
    image: payment,  // Ensure this image is added to your assets
    description:
      "A secure money transfer web application that ensures safe transactions using session management. Critical bugs are handled effectively, ensuring that funds are safe even in the event of a transaction failure.",
    technologies: ["React", "Node.js", "MongoDB", "Sessions"],
  },

];

export const CONTACT = {
  address: " solapur , Maharashtra",
  phoneNo: "+91 9767738681 ",
  email: "siddharamsutar23@gmail.com",
};
