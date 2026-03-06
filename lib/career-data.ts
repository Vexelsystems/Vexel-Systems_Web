/**
 * CAREER DATA
 *
 * Functional Overview:
 * - Defines open positions for the Careers page.
 * - Structure: Optimized for card display and detail modals.
 * - Now updated with Trainee, Internship, and Junior roles for all departments.
 */
import type { JobPosition } from "@/lib/types";

const generatePositions = (
  title: string,
  department: string,
  baseId: string,
  extraRequirements: string[] = [],
  extraResponsibilities: string[] = [],
): JobPosition[] => {
  return [
    {
      id: `${baseId}-trainee`,
      title: `${title} - Trainee`,
      department: department,
      type: "Hybrid",
      salary: "Rs. 5,000 (Monthly Stipend)",
      location: "Vavuniya, Sri Lanka",
      description: `Start your journey in ${title.toLowerCase()} with Vexel Systems. We provide comprehensive training from the ground up.`,
      requirements: [
        "No prior knowledge required. We provide full training.",
        "Willingness to learn and grow with the team.",
        "Basic computer literacy.",
        "Reliable and punctual.",
      ],
      responsibilities: [
        "Participate in daily training sessions.",
        "Assist senior developers in basic tasks.",
        "Learn the tools and technologies used by Vexel.",
        "Maintain a learning log and report progress.",
      ],
    },
    {
      id: `${baseId}-intern`,
      title: `${title} - Intern`,
      department: department,
      type: "Hybrid",
      salary: "Rs. 5,000 - 25,000",
      location: "Vavuniya, Sri Lanka",
      description: `Apply your basic knowledge to real-world projects. Perfect for students and recent graduates looking for industry experience.`,
      requirements: [
        "Basic understanding of industry-standard concepts.",
        "Strong problem-solving mindset.",
        ...extraRequirements,
      ],
      responsibilities: [
        "Work on project modules under supervision.",
        "Participate in team meetings and sprints.",
        "Help document code and processes.",
        ...extraResponsibilities,
      ],
    },
    {
      id: `${baseId}-junior`,
      title: `Junior ${title}`,
      department: department,
      type: "Hybrid",
      salary: "Rs. 25,000 - 45,000",
      location: "Vavuniya, Sri Lanka",
      description: `Contribute to our core products as a full-time member of the team. We value growth and technical excellence.`,
      requirements: [
        "Prior experience (Internship or Portfolio projects).",
        "Strong technical foundation.",
        ...extraRequirements,
      ],
      responsibilities: [
        "Develop and maintain key features.",
        "Ensure performance and scalability.",
        "Collaborate across teams to deliver value.",
        ...extraResponsibilities,
      ],
    },
  ];
};

export const jobPositions: JobPosition[] = [
  ...generatePositions(
    "Frontend Developer",
    "Engineering",
    "frontend",
    ["Familiarity with React or Next.js.", "Good eye for UI/UX."],
    ["Build responsive web interfaces.", "Optimize frontend performance."],
  ),

  ...generatePositions(
    "Backend Developer",
    "Engineering",
    "backend",
    ["Basic knowledge of Node.js or Python.", "Understanding of REST APIs."],
    ["Maintain server-side logic.", "Manage database integrations."],
  ),

  ...generatePositions(
    "SEO Specialist",
    "Marketing",
    "seo",
    ["Understanding of search engine algorithms.", "Keywords research skills."],
    ["Optimize website for visibility.", "Monitor ranking performance."],
  ),

  ...generatePositions(
    "Content Writer",
    "Marketing",
    "content-writer",
    ["Excellent writing and editing skills.", "Creative thinking."],
    ["Create engaging blog posts and copy.", "Develop social media content."],
  ),

  ...generatePositions(
    "Database Administrator",
    "Engineering",
    "database",
    ["Understanding of SQL/NoSQL databases.", "Data modeling basics."],
    ["Ensure data integrity and security.", "Optimize database queries."],
  ),

  ...generatePositions(
    "QA Engineer",
    "Engineering",
    "qa",
    ["Attention to detail.", "Manual/Automated testing basics."],
    ["Perform regression and unit testing.", "Document and track bugs."],
  ),

  ...generatePositions(
    "DevOps Engineer",
    "Engineering",
    "devops",
    ["Basic Linux knowledge.", "Familiarity with Cloud platforms."],
    ["Assist in deployment cycles.", "Monitor infrastructure health."],
  ),

  ...generatePositions(
    "Project Manager",
    "Product",
    "pm",
    ["Strong coordination and communication.", "Agile mindset."],
    ["Manage timelines and task boards.", "Coordinate between stakeholders."],
  ),

  ...generatePositions(
    "AI / ML Engineer",
    "Engineering",
    "ai-ml",
    ["Mathematical foundation.", "Interest in data science."],
    ["Implement predictive models.", "Assist in data preprocessing."],
  ),
];
