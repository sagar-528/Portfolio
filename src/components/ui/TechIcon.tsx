import React from 'react';
import { 
  Database, 
  Github, 
  ServerCog, // Note: ServerCog wasn't used, PenTool neither
  Cloud, 
  CircuitBoard,
  // PenTool // Not used
} from 'lucide-react';
// Import icons from react-icons
import { DiJavascript1 } from 'react-icons/di';
import { FaReact, FaVuejs, FaDocker, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNodedotjs, SiAmazon } from 'react-icons/si';

interface TechIconProps {
  name: string;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ name, className = "" }) => {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case 'js':
        return <DiJavascript1 className={`text-yellow-400 ${className}`} />;
      case 'react': // Covers both React and React Native conceptually with FaReact
      case 'reactnative': 
        return <FaReact className={`text-blue-500 ${className}`} />;
      case 'vue':
        return <FaVuejs className={`text-green-500 ${className}`} />;
      case 'tailwind':
        return <SiTailwindcss className={`text-teal-400 ${className}`} />;
      case 'node':
        return <SiNodedotjs className={`text-green-600 ${className}`} />;
      case 'database': // Assuming generic DB icon for Mongo/Postgres
        return <Database className={`text-green-700 ${className}`} />;
      case 'aws':
        return <SiAmazon className={`text-orange-500 ${className}`} />;
      case 'docker':
        return <FaDocker className={`text-blue-400 ${className}`} />;
      case 'git':
        return <FaGitAlt className={`text-orange-600 ${className}`} />;
      case 'python':
        return <FaPython className={`text-blue-700 ${className}`} />;
      default:
        return <CircuitBoard className={`text-gray-500 ${className}`} />;
    }
  };

  return getIcon();
};

export default TechIcon;