export interface ProjectItemInterface {
  title: string;
  start_date: string;
  end_date: string;
  description: string[];
}

export const projectData: ProjectItemInterface[] = [
  {
    title: "(FYP) C-BAS Cloud Breach and Attack Simulation Tool",
    start_date: "August 2022",
    end_date: "August 2023",
    description: [
      "Developed a cloud-based breach and attack simulation tool for docker containers using Python, Django, and React JS.",
      "Collaborated with our team,Dr. Qaiser Shafi and Bitsym LTD. in designing architecture for the tool.",
      "Developed and optimized high-quality, testable, and reusable code for React applications.",
      "Designed and implemented architecture in collaboration with the team members.",
      "Developed CI/CD pipelines and Docker compose file to deploy the back-end and front-end.",
      "Setup and maintained Mongo DB schema and queries for the application.",
    ],
  },
];
