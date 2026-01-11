export type JobPosition = {
  id: string;
  title: string;
  department: string;
  type: 'Remote' | 'Hybrid' | 'On-site';
  salary: string;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
};

export const jobPositions: JobPosition[] = [
  {
    id: 'fullstack-engineer-2026',
    title: 'Senior Fullstack Engineer',
    department: 'Engineering',
    type: 'Hybrid',
    salary: 'Rs. 250,000 - 450,000',
    location: 'Colombo, Sri Lanka',
    description: 'We are looking for a Senior Fullstack Engineer to help build the core of Vexel Systems. You will be responsible for developing high-performance web applications and robust backend services.',
    requirements: [
      '5+ years of experience with React, Next.js, and Node.js.',
      'Strong understanding of PostgreSQL and Redis.',
      'Experience with AWS or Google Cloud Platform.',
      'Prior experience with POS systems is a plus.'
    ],
    responsibilities: [
      'Architect and develop new features for the Vexel Dashboard.',
      'Optimize system performance and scalability.',
      'Mentor junior developers through code reviews.',
      'Collaborate with the product team to define specifications.'
    ]
  },
  {
    id: 'pos-specialist-colombo',
    title: 'POS Hardware Specialist',
    department: 'Operations',
    type: 'On-site',
    salary: 'Rs. 80,000 - 150,000',
    location: 'Colombo / Gampaha',
    description: 'Ensure our clients have a seamless hardware experience. You will be the go-to person for installations and high-level hardware troubleshooting.',
    requirements: [
      'Knowledge of POS peripherals (Printers, Scanners, KDS).',
      'Strong networking knowledge (LAN, Wi-Fi, Static IPs).',
      'Excellent problem-solving skills and communication.',
      'Willingness to travel to client sites.'
    ],
    responsibilities: [
      'On-site installation and configuration of Vexel hardware bundles.',
      'Provide technical training to client staff.',
      'Troubleshoot complex hardware issues.',
      'Maintain an inventory of spare parts and demo units.'
    ]
  },
  {
    id: 'growth-lead-marketing',
    title: 'Growth & Marketing Lead',
    department: 'Marketing',
    type: 'Remote',
    salary: 'Rs. 150,000 - 250,000',
    location: 'Remote (Sri Lanka)',
    description: 'Drive the next wave of Vexel adoption. We need a creative data-driven marketer to scale our user base across South Asia.',
    requirements: [
      'Proven track record in SaaS growth marketing.',
      'Proficiency in SEO, SEM, and Social Media Ads.',
      'Strong analytical skills (Google Analytics, Mixpanel).',
      'Excellent English and Sinhala/Tamil communication.'
    ],
    responsibilities: [
      'Design and execute multi-channel marketing campaigns.',
      'Optimize the conversion funnel and reduce churn.',
      'Manage company social media and blog content.',
      'Build partnerships with local retail associations.'
    ]
  },
  {
    id: 'customer-success-rep',
    title: 'Customer Success Representative',
    department: 'Support',
    type: 'Hybrid',
    salary: 'Rs. 60,000 - 100,000',
    location: 'Colombo, Sri Lanka',
    description: 'Help our users get the most out of Vexel. You will be the first point of contact for onboarding and feature guidance.',
    requirements: [
      'Experience in customer-facing roles.',
      'Patience and empathy with non-technical users.',
      'Fast typing and multi-tasking abilities.',
      'Fluency in English and Sinhala.'
    ],
    responsibilities: [
      'Respond to live chat and email inquiries.',
      'Conduct remote onboarding sessions for new clients.',
      'Create and update guide articles for the Help Center.',
      'Relay user feedback to the product team.'
    ]
  },
  {
    id: 'uiux-designer-product',
    title: 'UI/UX Designer',
    department: 'Product',
    type: 'Hybrid',
    salary: 'Rs. 120,000 - 200,000',
    location: 'Colombo, Sri Lanka',
    description: 'Help us make complex tools feel simple. You will design intuitive interfaces for both our desktop and mobile applications.',
    requirements: [
      'Strong portfolio of SaaS or web app designs.',
      'Proficiency in Figma and Adobe Creative Suite.',
      'Understanding of design systems and responsive web.',
      'Basic knowledge of HTML/CSS is a plus.'
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs.',
      'Maintain and expand the Vexel design system.',
      'Conduct user testing sessions to gather feedback.',
      'Work closely with engineers to ensure design fidelity.'
    ]
  }
];
