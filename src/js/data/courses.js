export const categories = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Master applied AI engineering — LLMs, Prompt Engineering, RAG architectures, Autonomous Agents, MCP & Voice AI.",
    gradient: "linear-gradient(135deg, #FF6A00 0%, #FFB000 100%)",
    iconBg: "rgba(255, 106, 0, 0.14)",
    tagColor: "#FF6A00",
    logo: "src/img/tech-logo/ai.svg",
    courseIds: ["appliedai"],
  },
  {
    id: "programming",
    title: "Programming Languages",
    description:
      "Master core languages — from systems programming with C/C++ to scripting with Python and enterprise Java.",
    gradient: "linear-gradient(135deg, #4f6ef7 0%, #8b5cf6 100%)",
    iconBg: "rgba(79,110,247,0.14)",
    tagColor: "#4f6ef7",
    logo: "src/img/tech-logo/programming.png",
    courseIds: ["c", "cpp", "python", "java", "dart", "javascript"],
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description:
      "Master DSA with C++ — from arrays to graphs, with hands-on problem solving for interviews.",
    gradient: "linear-gradient(135deg, #06d6a0 0%, #4f6ef7 100%)",
    iconBg: "rgba(6,214,160,0.12)",
    tagColor: "#06d6a0",
    logo: "src/img/tech-logo/DSA.png",
    courseIds: ["dsa-cpp"],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Build modern websites from scratch — HTML structure, CSS styling, and interactive JavaScript.",
    gradient: "linear-gradient(135deg, #e44d26 0%, #264de4 100%)",
    iconBg: "rgba(228,77,38,0.14)",
    tagColor: "#e44d26",
    logo: "src/img/tech-logo/web.png",
    courseIds: ["html", "css", "javascript", "git", "nodejs", "express", "postgresql", "mongodb", "auth-security", "typescript", "docker", "react", "nextjs", "testing", "system-design"],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Build beautiful cross-platform mobile apps with Flutter — widgets, state management, and deployment.",
    gradient: "linear-gradient(135deg, #02569b 0%, #4fc3f7 100%)",
    iconBg: "rgba(2,86,155,0.14)",
    tagColor: "#02569b",
    logo: "src/img/tech-logo/mobile.png",
    courseIds: ["flutter", "dart", "java"],
  },
];

export const courses = [
    {
        id: 'c',
        title: 'C Programming',
        description: 'Master the fundamentals of C programming — from variables and pointers to file handling and dynamic memory.',
        tags: ['System', 'Procedural'],
        logo: 'src/img/tech-logo/c.png',
        isAvailable: true
    },
    {
        id: 'cpp',
        title: 'C++ Programming',
        description: 'Deep dive into object-oriented programming with C++ — classes, inheritance, polymorphism, and STL.',
        tags: ['OOP', 'System'],
        logo: 'src/img/tech-logo/cpp.png',
        isAvailable: true
    },
    {
        id: 'dsa-cpp',
        title: 'DSA with C++',
        description: 'Master data structures and algorithms with C++ — from arrays to graphs, with hands-on problem solving.',
        tags: ['CS Fundamentals', 'Interview Prep'],
        logo: 'src/img/tech-logo/DSA.png',
        isAvailable: true
    },
    {
        id: 'python',
        title: 'Python Programming',
        description: 'Learn Python from the ground up — syntax, data structures, OOP, modules, and real-world scripting.',
        tags: ['Scripting', 'General Purpose'],
        logo: 'src/img/tech-logo/python.png',
        isAvailable: true
    },
    {
        id: 'java',
        title: 'Java Programming',
        description: 'Comprehensive Java course — JVM, OOP, collections, multithreading, and building robust applications.',
        tags: ['OOP', 'Enterprise'],
        logo: 'src/img/tech-logo/java.png',
        isAvailable: true
    },
    {
        id: 'dart',
        title: 'Dart Programming',
        description: 'Master Dart programming — types, collections, async, and the foundation for Flutter development.',
        tags: ['UI', 'Cross-Platform'],
        logo: 'src/img/tech-logo/dart.svg',
        isAvailable: true
    },
    {
        id: 'flutter',
        title: 'Flutter Mobile App Development',
        description: 'Build beautiful cross-platform mobile apps with Flutter — widgets, state management, and deployment.',
        tags: ['UI', 'Cross-Platform'],
        logo: 'src/img/tech-logo/flutter.svg',
        isAvailable: true
    },
    {
        id: 'css',
        title: 'CSS Mastery: Styling the Modern Web',
        description: 'Master CSS from selectors and box model to Flexbox, Grid, animations, and responsive design.',
        tags: ['Frontend', 'Design'],
        logo: 'src/img/tech-logo/css3.png',
        isAvailable: true
    },
    {
        id: 'html',
        title: 'HTML: Structure the Web',
        description: 'Learn HTML from basic tags to semantic elements, forms, accessibility, and building real-world page structures.',
        tags: ['Frontend', 'Markup'],
        logo: 'src/img/tech-logo/html5.png',
        isAvailable: true
    },
    {
        id: 'javascript',
        title: 'JavaScript Programming',
        description: 'Master JavaScript — variables, functions, DOM, async programming, ES6+, and building interactive web apps.',
        tags: ['Frontend', 'Logic'],
        logo: 'src/img/tech-logo/javascript.png',
        isAvailable: true
    },
    {
        id: 'git',
        title: 'Git and GitHub',
        description: 'Learn only what matters — commits, branches, merging, pull requests and deploying with GitHub Pages.',
        tags: ['Tools', 'Collaboration'],
        logo: 'src/img/tech-logo/github.png',
        isAvailable: true
    },
    {
        id: 'nodejs',
        title: 'Node.js',
        description: 'Learn Node.js from scratch — modules, npm, file system, async programming and your first server.',
        tags: ['Backend', 'Runtime'],
        logo: 'src/img/tech-logo/nodejs.png',
        isAvailable: true
    },
    {
        id: 'express',
        title: 'Express.js',
        description: 'Build REST APIs with Express — routing, middleware, validation, error handling, CORS and deployment.',
        tags: ['Backend', 'APIs'],
        logo: 'src/img/tech-logo/express.png',
        isAvailable: true
    },
    {
        id: 'postgresql',
        title: 'SQL and PostgreSQL',
        description: 'Learn databases the practical way — SQL queries, joins, schema design, indexes, transactions and using PostgreSQL with Node.js.',
        tags: ['Database', 'SQL'],
        logo: 'src/img/tech-logo/postgresql.png',
        isAvailable: true
    },
    {
        id: 'mongodb',
        title: 'MongoDB',
        description: 'Learn NoSQL the practical way — documents, queries, aggregation, Mongoose and deploying with Atlas.',
        tags: ['Database', 'NoSQL'],
        logo: 'src/img/tech-logo/mongodb.png',
        isAvailable: true
    },
    {
        id: 'auth-security',
        title: 'Authentication and Security',
        description: 'Secure your apps — password hashing, JWT, roles, OAuth overview and the web security essentials every developer needs.',
        tags: ['Security', 'Backend'],
        logo: 'src/img/tech-logo/auth-security.png',
        isAvailable: true
    },
    {
        id: 'typescript',
        title: 'TypeScript',
        description: 'Add types to JavaScript — interfaces, generics, utility types and using TypeScript with Node and Express.',
        tags: ['Language', 'Typed JS'],
        logo: 'src/img/tech-logo/typescript.png',
        isAvailable: true
    },
    {
        id: 'docker',
        title: 'Docker and Deployment',
        description: 'Ship your apps — Docker, Compose, deploying to cloud and VPS, Nginx, HTTPS and CI/CD with GitHub Actions.',
        tags: ['DevOps', 'Deployment'],
        logo: 'src/img/tech-logo/docker.png',
        isAvailable: true
    },
    {
        id: 'react',
        title: 'React',
        description: 'Build modern interfaces — components, state, hooks, routing, TanStack Query and connecting to your own API.',
        tags: ['Frontend', 'Library'],
        logo: 'src/img/tech-logo/react.png',
        isAvailable: true
    },
    {
        id: 'nextjs',
        title: 'Next.js',
        description: 'Full stack React — App Router, server components, server actions, authentication, SEO and deployment.',
        tags: ['Full Stack', 'Framework'],
        logo: 'src/img/tech-logo/nextjs.png',
        isAvailable: true
    },
    {
        id: 'testing',
        title: 'Testing',
        description: 'Test with confidence — unit tests with Vitest, API tests with Supertest, React Testing Library and Playwright E2E.',
        tags: ['Quality', 'Testing'],
        logo: 'src/img/tech-logo/testing.png',
        isAvailable: true
    },
    {
        id: 'system-design',
        title: 'System Design Basics',
        description: 'Think in systems — scaling, load balancing, caching, queues, databases at scale and real design case studies.',
        tags: ['Architecture', 'Scaling'],
        logo: 'src/img/tech-logo/system-design.png',
        isAvailable: true
    },
    {
        id: 'appliedai',
        title: 'Applied AI Engineering',
        description: 'Master LLMs, RAG, agentic workflows, function calling, MCP, and voice AI with first-principles engineering.',
        tags: ['LLMs & RAG', 'Agentic AI'],
        logo: 'src/img/tech-logo/ai.svg',
        isAvailable: true
    }
];
