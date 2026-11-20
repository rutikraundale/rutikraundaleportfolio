export const personal = {
  name: 'Rutik Raundale',
  title: 'Final-year Computer Engineering Student / Full Stack Developer',
  location: 'Nashik, Maharashtra, India',
  email: 'rutikraundale5@gmail.com',
  phone: '+91 9503455274',
  github: 'https://github.com/rutikraundale',
  linkedin: 'https://linkedin.com/in/rutik-raundale',
  leetcode: 'https://leetcode.com/u/rutikraundale',
  resume: 'https://drive.google.com/uc?export=download&id=1ABO8mD05CD9hWMnRvlHe2guVpvEB4QUv',
  resumePreview: 'https://drive.google.com/file/d/1ABO8mD05CD9hWMnRvlHe2guVpvEB4QUv/view',
}

export const skills = [
  {
    title: 'Programming Languages',
    items: [
      ['C++', 'SiCplusplus'], ['JavaScript (ES6+)', 'SiJavascript'], ['SQL', 'Database'],
    ],
  },
  {
    title: 'Frontend Development',
    items: [
      ['React.js', 'SiReact'], ['HTML5', 'SiHtml5'], ['CSS3', 'SiCss'], ['Tailwind CSS', 'SiTailwindcss'],
    ],
  },
  {
    title: 'Backend Development',
    items: [
      ['Node.js', 'SiNodedotjs'], ['Express.js', 'SiExpress'], ['REST APIs', 'Network'],
      ['Webhooks', 'Webhook'], ['Socket.io', 'SiSocketdotio'],
    ],
  },
  {
    title: 'Databases',
    items: [['MongoDB', 'SiMongodb'], ['MySQL', 'SiMysql'], ['Redis', 'SiRedis']],
  },
  {
    title: 'Cloud & Infrastructure',
    items: [['AWS', 'FaAws'], ['Oracle Cloud Infrastructure', 'GrOracle'], ['Docker', 'SiDocker']],
  },
  {
    title: 'Tools & Environment',
    items: [
      ['Git', 'SiGit'], ['GitHub', 'SiGithub'], ['Postman', 'SiPostman'],
      ['Linux (Ubuntu)', 'SiLinux'], ['VS Code', 'VscVscode'], ['Appwrite', 'SiAppwrite'],
    ],
  },
  {
    title: 'Core Concepts',
    items: [
      ['Data Structures & Algorithms', 'Brain'], ['Object-Oriented Programming', 'Boxes'],
      ['Database Management Systems', 'Database'], ['Operating Systems', 'Monitor'],
      ['System Architecture', 'Workflow'], ['API Integration', 'Network'],
      ['Process Automation', 'Cog'],
    ],
  },
]

export const projects = [
  {
    number: '01',
    title: 'HackMeet',
    subtitle: 'Team Matchmaking & Communication Platform',
    description: 'Developed a platform for hackathon team discovery and skill-based matching, enabling users to connect, communicate and form teams.',
    tech: ['MERN', 'Socket.io', 'Cloudinary'],
    highlights: ['Skill-based team discovery', 'Real-time messaging', 'Team invitations', 'Authentication', 'REST APIs', 'MongoDB integration'],
    live: 'https://hackmeetdotcom.netlify.app',
    github: 'https://github.com/rutikraundale/hackmeet',
    image: '/projects/hackmeet.png',
  },
  {
    number: '02',
    title: 'CampusFind',
    subtitle: 'Lost & Found Management Platform',
    description: 'Built a centralized platform for lost item reporting, claim verification and status tracking.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer'],
    highlights: ['Lost and found reporting', 'OTP verification', 'Email notifications', 'Backend validation', 'Role-based access'],
    live: null,
    github: 'https://github.com/rutikraundale/campusfind',
    image: '/projects/campusfind.png',
  },
  {
    number: '03',
    title: 'SamarthDevelopers',
    subtitle: 'Construction Operations & Management System',
    description: 'Built a workflow management dashboard with role-based access for administrators, project managers and team leads.',
    tech: ['React.js', 'Tailwind CSS', 'Appwrite'],
    highlights: ['Attendance tracking', 'Inventory management', 'Payroll management', 'Invoice generation', 'Appwrite auth and database'],
    live: null,
    github: null,
    image: '/projects/samarthdevelopers.png',
  },
]
