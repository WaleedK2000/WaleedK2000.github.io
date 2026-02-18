export interface ProjectItemInterface {
  title: string;
  start_date: string;
  end_date: string;
  description: string[];
}

export const projectData: ProjectItemInterface[] = [
  {
    title: "Rulebook Company",
    start_date: "",
    end_date: "",
    description: [
      "Designed a normalized ERD and PostgreSQL database schema, ensuring data integrity, scalability, and efficient querying.",
      "Built a responsive, mobile-first frontend using React JS, focusing on reusable components, clean state management, and seamless API integration.",
      "Built CI/CD pipelines using GitHub Actions to automate build, test, and deployment workflows.",
      "Implemented Infrastructure as Code (IaC) using Pulumi, triggered via CI/CD pipelines to provision and manage AWS infrastructure programmatically.",
      "Built high-performance asynchronous APIs using FastAPI, optimizing request handling and database operations for improved throughput.",
      "Accelerated content delivery by 50–70% for repeat S3 requests through CDN integration.",
    ],
  },
  {
    title: "Gibion AI",
    start_date: "",
    end_date: "",
    description: [
      "Designed and implemented automation workflows using Python, orchestrating reliable, fault-tolerant processes with Temporal for scalable workflow management.",
      "Integrated workflow orchestration with backend REST APIs to trigger automated jobs from frontend actions, utilizing WebSockets for real-time status updates and result delivery.",
      "Leveraged Sentry for real-time error monitoring and debugging, identifying and resolving production bugs and performance bottlenecks.",
    ],
  },
];
