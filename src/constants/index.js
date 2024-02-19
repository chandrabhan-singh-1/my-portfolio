import {
  mern,
  docker,
  prisma,
  python,
  frontend,
  backend,
  gamehub,
  wp,
  cv,
  auth,
  taskify,
  shadcn,
  authLogo,
  genius,
  discord,
} from "../assets/images";
import {
  css,
  chakra,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: shadcn,
    name: "Shadcn-UI",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: chakra,
    name: "Chakra-UI",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: prisma,
    name: "Prisma",
    type: "Database ORM",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "backend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Containerization",
  },
  {
    imageUrl: authLogo,
    name: "Auth.js",
    type: "Authentication",
  },
];

export const experiences = [
  {
    title: "Front-End Development",
    icon: frontend,
    iconBg: "#fbc3bc",
    iconClass: "",
    points: [
      "Crafting visually appealing and highly interactive user interfaces using cutting-edge front-end technologies.",
      "Ensuring a seamless and responsive user experience across various devices and screen sizes.",
      "Implementing animations, transitions, and other engaging features to enhance user engagement.",
      "Staying abreast of the latest trends and emerging technologies in front-end development for continuous innovation.",
    ],
  },
  {
    title: "Back-End Development",
    icon: backend,
    iconBg: "#fbc3bc",
    iconClass: "",
    points: [
      "Designing and developing robust and scalable server-side applications using Node.js and other backend technologies.",
      "Implementing efficient database structures and optimizing queries for enhanced performance.",
      "Ensuring data security through encryption, authentication, and authorization mechanisms.",
      "Collaborating with front-end developers to create a cohesive and integrated application architecture.",
    ],
  },
  {
    title: "MERN: Full-Stack Development",
    icon: mern,
    iconBg: "#fbc3bc",
    iconClass: "-hue-rotate-90 sepia text-purple-600",
    points: [
      "Architecting robust and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Employing RESTful API design principles to facilitate seamless communication between the front-end and back-end.",
      "Implementing state-of-the-art security measures and encryption techniques to safeguard sensitive user data.",
      "Optimizing performance through efficient database querying and employing industry best practices for code structure and organization.",
    ],
  },
  {
    title: "Next.js: Full-Stack Development",
    icon: nextjs,
    iconBg: "#b7e4c7",
    iconClass: "",
    points: [
      "Crafting dynamic and interactive web applications with Next.js, leveraging its server-side rendering and static site generation capabilities.",
      "Building seamless user experiences by integrating client-side routing and optimizing for performance and SEO.",
      "Implementing data fetching strategies, including API integration and serverless functions for dynamic content.",
      "Ensuring accessibility and responsive design to deliver a polished and inclusive user interface.",
    ],
  },
  {
    title: "WordPress Web Development",
    icon: wp,
    iconBg: "#fff",
    iconClass: "scale-150",
    points: [
      "Customizing and extending WordPress themes and plugins to meet unique project requirements.",
      "Integrating e-commerce solutions, membership systems, and other advanced functionalities with precision.",
      "Ensuring top-notch security measures and regularly updating plugins to maintain a secure WordPress environment.",
      "Providing intuitive and user-friendly content management solutions tailored to clients' needs.",
    ],
  },
];

export const socialLinks = [
  {
    name: "My Resume",
    iconUrl: cv,
    link: "https://drive.google.com/file/d/1u1-Yha4YlD_bPj8oHIP47lvUVNmqrFSH/view?usp=sharing",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/chandrabhan-singh-1",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/chandrabhan-singh-rathore-868951231",
  },
];

export const projects = [
  {
    iconUrl: discord,
    theme: "btn-back-yellow",
    name: "Discord 2.0",
    features:
      "A full-stack Discord clone with web-sockets. It allows user to create servers, channels, add/remove members, update member roles, update all servers/channels and have real-time chats.",
    description:
      "Discord 2.0, created using Next.js 13, live-kit, socket.io, tanstackQuery etc for real-time text/video/audio chat experiences.",
    link: "https://discord-20-production-ea25.up.railway.app/",
    intro:
      "https://www.dropbox.com/scl/fi/jji5e4ds581fanutjivue/Discord-2.0-Intro-Made-with-Clipchamp_1708355926827.mp4?rlkey=i76axbyjesiwd14k8r331t5vu&dl=0",
    codeLink: "https://github.com/chandrabhan-singh-1/discord-2.0",
  },
  {
    iconUrl: gamehub,
    theme: "btn-back-red",
    name: "Twitch Clone: GameHub",
    features:
      "Live-stream, Live-Chat, Follow/Unfollow users, Block/Unblock users from chat/community, search streams etc.",
    description:
      "Developed a full-stack web application that allows users to do live-streams with all kind of popular streaming softwares e.g. OBS, wirecast or vMix etc.",
    link: "https://twitch-clone-gamehub.vercel.app/",
    intro:
      "https://www.dropbox.com/scl/fi/kbkmm3mozphch2g25ll2r/Gamehub-Intro-Made-with-Clipchamp_1708353239245.mp4?rlkey=1oqyb44d5qyczejpcmhn4clb6&dl=0",
    codeLink: "https://github.com/chandrabhan-singh-1/twitch-clone-gamehub",
  },
  {
    iconUrl: taskify,
    theme: "btn-back-purple",
    name: "Trello Clone: Taskify",
    features:
      "Manage Organizations, Create Boards, using Unsplash api for Bg-images, Stripe based subscription, Drag & Drop, Recording task history etc.",
    description:
      'Created a full-stack replica of the popular task management platform "Trello," enabling teams & individuals to manage several projects and tasks at one place.',
    link: "https://nextjs-14-trello-clone.vercel.app/",
    intro:
      "https://www.dropbox.com/scl/fi/yaaz20dk2rvhqsv8hxuor/Taskify-Intro-Made-with-Clipchamp_1708346440723.mp4?rlkey=mvg3z7w0sxa94jhk5rsetgos5&dl=0",
    codeLink: "https://github.com/chandrabhan-singh-1/Nextjs-14-Trello-Clone",
  },
  {
    iconUrl: genius,
    theme: "btn-back-green",
    name: "AI-Based SAAS: Genius",
    features:
      "Chat with AI, Image generation, Video generation, Code generation, Music generation and Secure subscription service etc.",
    description:
      "This is a Full-stack AI based SAAS platform, where users are offered various ai-services at a single platform with the help of Open-AI and Replicate-AI APIs.",
    link: "https://genius-ai-saas-pi.vercel.app/",
    intro:
      "https://www.dropbox.com/scl/fi/poezb5nnciq4j82n7jh02/Genius-Intro-Made-with-Clipchamp_1708350683303.mp4?rlkey=zzkor4r55aes2hzjj61hdqcyz&dl=0",
    codeLink: "https://github.com/chandrabhan-singh-1/Genius-ai-saas",
  },
  // {
  //   iconUrl: auth,
  //   theme: "btn-back-blue",
  //   name: "Authentication App: NextAuth/Auth.js",
  //   features:
  //     "2-Factor-Authentication, Role based permissions, OAuth services, Email verification, Seamless real-time data updation etc.",
  //   description:
  //     "Created a Auth.js/NextAuth based authentication project. This project is intended to showcase my NextAuth implementation skills.",
  //   link: "https://next-auth-js-mu.vercel.app/",
  //   codeLink: "https://github.com/chandrabhan-singh-1/next-auth-js",
  // },
];
