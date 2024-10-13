// skillsData.jsx
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaTools
} from 'react-icons/fa';
import {
  SiChakraui,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiAngular,
  SiVisualstudiocode,
  SiInsomnia,
  SiPostman
} from 'react-icons/si';

const skillsData = {
  programmingLanguages: [
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#f0db4f' },
    { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
    { name: 'HTML', icon: <FaHtml5 />, color: '#e34f26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' }
  ],
  frameworksAndLibraries: [
    { name: 'React', icon: <FaReact />, color: '#61DBFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#8CC84B' },
    { name: 'Chakra UI', icon: <SiChakraui />, color: '#319795' },
    { name: 'Express.js', icon: <FaTools />, color: '#4B8BBE' },
    { name: 'Bcrypt', icon: <FaTools />, color: '#F7B731' },
    { name: 'Jsonwebtoken (JWT)', icon: <FaTools />, color: '#27AE60' },
    { name: 'Mongoose', icon: <FaTools />, color: '#4CAF50' },
    { name: 'Multer', icon: <FaTools />, color: '#7B1FA2' }
  ],
  softwareAndTools: [
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Git', icon: <FaTools />, color: '#F05032' },
    { name: 'Visual Studio', icon: <SiVisualstudiocode />, color: '#0096D8' },
    { name: 'Insomnia', icon: <SiInsomnia />, color: '#5851DB' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Nodemon', icon: <FaTools />, color: '#76D7C4' },
    { name: 'Dotenv', icon: <FaTools />, color: '#58D68D' },
    { name: 'Cors', icon: <FaTools />, color: '#F5B041' },
    { name: 'Body-parser', icon: <FaTools />, color: '#F39C12' }
  ],
  learning: ['TypeScript', 'Python', 'GraphQL', 'Docker']
};

export default skillsData;
export const {
  programmingLanguages,
  frameworksAndLibraries,
  softwareAndTools,
  learning
} = skillsData;
