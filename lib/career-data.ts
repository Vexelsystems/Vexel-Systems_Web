/**
 * CAREER DATA
 * 
 * Functional Overview:
 * - Defines open positions for the Careers page.
 * - Structure: Optimized for card display and detail modals.
 * - Types imported from centralized types.ts
 */
import type { JobPosition } from "@/lib/types";

export const jobPositions: JobPosition[] = [
  // --- FRONTEND ---
  {
    id: 'frontend-engineer-intern',
    title: 'Frontend Developer Intern',
    department: 'Engineering',
    type: 'Hybrid',
    salary: 'Rs. 25,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Kickstart your career by building beautiful user interfaces. You will work closely with senior developers to maintain and improve our web applications.',
    requirements: [
      'Basic understanding of HTML, CSS, and JavaScript.',
      'Familiarity with React.js is a plus.',
      'Eager to learn modern web frameworks like Next.js.',
      'Good eye for detail and design.'
    ],
    responsibilities: [
      'Assist in implementing UI components from Figma designs.',
      'Fix UI bugs and responsiveness issues.',
      'Participate in code reviews and learning sessions.',
      'Write clean and documented code.'
    ]
  },
  {
    id: 'frontend-engineer-junior',
    title: 'Junior Frontend Developer',
    department: 'Engineering',
    type: 'Hybrid',
    salary: 'Rs. 50,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Join our frontend team to build responsive and interactive web applications using the latest technologies.',
    requirements: [
      '1+ year of experience with React.js or Next.js.',
      'Strong knowledge of CSS/TypeSript.',
      'Experience with Tailwind CSS.',
      'Understanding of REST APIs.'
    ],
    responsibilities: [
      'Develop new user-facing features.',
      'Optimize application for maximum speed and scalability.',
      'Collaborate with backend developers and designers.',
      'Maintain code quality and write automated tests.'
    ]
  },

  // --- BACKEND ---
  {
    id: 'backend-engineer-intern',
    title: 'Backend Developer Intern',
    department: 'Engineering',
    type: 'Hybrid',
    salary: 'Rs. 25,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Learn how to build scalable server-side applications. You will support the team in API development and database management.',
    requirements: [
      'Basic knowledge of Node.js or Python.',
      'Understanding of databases (SQL or NoSQL).',
      'Familiarity with Git version control.',
      'Strong logical thinking skills.'
    ],
    responsibilities: [
      'Assist in building RESTful APIs.',
      'Write scripts for data migration and maintenance.',
      'Help debug server-side issues.',
      'Document API endpoints.'
    ]
  },
  {
    id: 'backend-engineer-junior',
    title: 'Junior Backend Developer',
    department: 'Engineering',
    type: 'Hybrid',
    salary: 'Rs. 50,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Work on the core logic of our platforms. You will design, build, and maintain efficient, reusable, and reliable server-side code.',
    requirements: [
      '1+ year of experience with Node.js/Express or NestJS.',
      'Experience with PostgreSQL or MongoDB.',
      'Understanding of authentication (JWT, OAuth).',
      'Basic knowledge of cloud services (AWS/GCP) is a plus.'
    ],
    responsibilities: [
      'Develop and maintain high-performance API services.',
      'Optimize database queries for speed.',
      'Implement security and data protection measures.',
      'Integrate third-party services.'
    ]
  },

  // --- DATABASE ---
  {
    id: 'database-admin-intern',
    title: 'Database Administrator Intern',
    department: 'Engineering',
    type: 'Hybrid',
    salary: 'Rs. 25,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Dive into the world of data. You will help manage and optimize our growing datasets.',
    requirements: [
      'Basic knowledge of SQL queries.',
      'Understanding of relational database concepts.',
      'Curiosity about data security and backups.',
      'Analytical mindset.'
    ],
    responsibilities: [
      'Assist in monitoring database performance.',
      'Help verify data integrity and consistency.',
      'Support data backup and recovery procedures.',
      'Write simple reports and data extracts.'
    ]
  },

  // --- GRAPHIC DESIGN ---
  {
    id: 'graphic-designer-intern',
    title: 'Graphic Design Intern',
    department: 'Marketing',
    type: 'Remote',
    salary: 'Rs. 25,000',
    location: 'Remote',
    description: 'Unleash your creativity. You will help create visual assets for our marketing campaigns and social media.',
    requirements: [
      'Familiarity with Adobe Photoshop and Illustrator.',
      'Basic portfolio of creative work.',
      'Understanding of branding and typography.',
      'Ability to meet deadlines.'
    ],
    responsibilities: [
      'Design social media posts and ad creatives.',
      'Assist in creating marketing brochures and presentations.',
      'Edit photos and optimize images for web.',
      'Collaborate with the marketing team on campaigns.'
    ]
  },
  {
    id: 'graphic-designer-junior',
    title: 'Junior Graphic Designer',
    department: 'Marketing',
    type: 'Hybrid',
    salary: 'Rs. 50,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Create compelling visuals that tell our brand story. You will work across digital and print media.',
    requirements: [
      '1+ year of design experience.',
      'Proficiency in Adobe Creative Suite & Figma.',
      'Strong portfolio demonstrating versatility.',
      'Knowledge of motion graphics is a big plus.'
    ],
    responsibilities: [
      'Create high-quality visual assets for all marketing channels.',
      'Maintain brand consistency across all materials.',
      'Design merchandise and print collateral.',
      'Support the UI/UX team with asset generation.'
    ]
  },

  // --- TESTING / QA ---
  {
    id: 'qa-engineer-intern',
    title: 'QA Engineer Intern',
    department: 'Engineering',
    type: 'Hybrid',
    salary: 'Rs. 25,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Help us deliver bug-free software. You will learn manual testing processes and how to document issues effectively.',
    requirements: [
      'Attention to detail is critical.',
      'Basic understanding of software development lifecycle.',
      'Curiosity to break things and find bugs.',
      'Good written communication skills.'
    ],
    responsibilities: [
      'Manual testing of web and mobile applications.',
      'Report bugs with clear reproduction steps.',
      'Verify fixes provided by developers.',
      'Assist in maintaining test cases.'
    ]
  },
  {
    id: 'qa-engineer-junior',
    title: 'Junior QA Engineer',
    department: 'Engineering',
    type: 'Hybrid',
    salary: 'Rs. 50,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Ensure the quality of our releases. You will execute test plans and start venturing into automated testing.',
    requirements: [
      '1+ year of QA experience.',
      'Experience with manual testing methodologies.',
      'Basic knowledge of automation tools (Selenium/Cypress) is a plus.',
      'Understanding of API testing (Postman).'
    ],
    responsibilities: [
      'Execute detailed test plans for new features.',
      'Perform regression testing before releases.',
      'Collaborate with devs to reproduce complex issues.',
      'Start writing basic automated test scripts.'
    ]
  },

  // --- DEVOPS ---
  {
    id: 'devops-intern',
    title: 'DevOps Intern',
    department: 'Engineering',
    type: 'Hybrid',
    salary: 'Rs. 25,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Learn the infrastructure that powers modern apps. You will get hands-on experience with cloud servers and CI/CD.',
    requirements: [
      'Basic knowledge of Linux commands.',
      'Understanding of what Cloud (AWS/Azure) is.',
      'Familiarity with Docker is a plus.',
      'Strong problem-solving attitude.'
    ],
    responsibilities: [
      'Assist in server monitoring and maintenance.',
      'Learn to write simple shell scripts.',
      'Help troubleshoot deployment issues.',
      'Support the team in managing cloud resources.'
    ]
  },

  // --- PROJECT MANAGEMENT ---
  {
    id: 'pm-intern',
    title: 'Project Management Intern',
    department: 'Product',
    type: 'Hybrid',
    salary: 'Rs. 25,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Learn how software projects are delivered. You will assist project managers in tracking progress and coordinating teams.',
    requirements: [
      'Strong organizational skills.',
      'Excellent communication (English/Sinhala).',
      'Familiarity with tools like Trello, Jira, or Notion.',
      'Leadership potential.'
    ],
    responsibilities: [
      'Update project tracking boards.',
      'Take minutes during meetings.',
      'Follow up on task completions.',
      'Help organize team events and sprints.'
    ]
  },
  {
    id: 'pm-junior',
    title: 'Junior Project Manager',
    department: 'Product',
    type: 'Hybrid',
    salary: 'Rs. 50,000',
    location: 'Vavuniya, Sri Lanka',
    description: 'Coordinate our dynamic teams to deliver value. You will help manage timelines, scope, and communication.',
    requirements: [
      '1+ year of experience in a tech environment.',
      'Understanding of Agile/Scrum methodologies.',
      'Ability to handle multiple priorities.',
      'Strong interpersonal skills.'
    ],
    responsibilities: [
      'Facilitate daily stand-ups and sprint planning.',
      'Track project milestones and deliverables.',
      'Communicate project status to stakeholders.',
      'Remove blockers for the development team.'
    ]
  }
];
