export interface EducationItemInterface {
  degree: string;
  institution_name: string;
  start_date: string;
  end_date: string;
  location: string;
  grade?: string; // Optional grade
  honors?: string[]; // Optional honors/awards
}

export const educationData: EducationItemInterface[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution_name:
      "FAST National University of Computing and Emerging Sciences",
    start_date: "2019",
    end_date: "2023",
    location: "Islamabad, Pakistan",
    grade: "Grade: 3.43",
    honors: [
      "Deans List Spring '21 (Jun 2021)",
      "Deans List Fall '20 (Feb 2020)",
      "Deans List Fall '19 (Jan 2019)",
    ],
  },
];
