export interface WorkExperienceItemInterface {
  position_title: string;
  company_name: string;
  location: string;
  start_date: string;
  end_date: string;
  responsibilities: string[];
}

export const workExperienceData: WorkExperienceItemInterface[] = [
  {
    position_title: "Full Stack Engineer",
    company_name: "Codeaza Technologies",
    location: "Islamabad, Pakistan",
    start_date: "May 2024",
    end_date: "Current",
    responsibilities: [
      "Designed and developed scalable, production-grade RESTful backend APIs using FastAPI and Python, implementing secure authentication, RBAC, and third-party integrations.",
      "Built responsive and modular frontend interfaces using Vue.js, React js, and modern JavaScript practices, ensuring high performance, maintainability, and seamless integration with backend APIs.",
      "Integrated Sentry for real-time error tracking and performance monitoring, improving visibility into production issues.",
      "Implemented centralized logging, alerting, and uptime monitoring using BetterStack to enhance system observability and reliability.",
      "Optimized application responsiveness and load times through efficient API design, frontend state management, and performance-focused UI updates, ensuring smooth user experience across devices.",
      "Implemented CI/CD pipelines with GitHub Actions, enabling automated testing, deployments, and reducing developer load by 30%.",
    ],
  },
  {
    position_title: "Software Engineer",
    company_name: "Prismware Technologies",
    location: "Islamabad, Pakistan",
    start_date: "Sep 2023",
    end_date: "Mar 2024",
    responsibilities: [
      "Collaborated with designers, backend engineers, and product stakeholders to translate customer requirements into scalable and user-friendly frontend solutions.",
      "Developed high-quality, reusable, and testable React components, following modern JavaScript patterns to improve maintainability and reduce code duplication.",
      "Designed mobile-first, responsive layouts using modern CSS and component-based architecture, delivering consistent UX across desktop, tablet, and mobile screens",
      "Optimized frontend performance and user interactions by applying best practices in state management, component rendering, and API integration.",
    ],
  },
];
