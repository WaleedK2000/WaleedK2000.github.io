export interface EducationItemInterface {
  degree: string;
  institution_name: string;
  start_date: string;
  end_date: string;
  location: string;
  grade?: string; // Optional grade
}

export const educationData: EducationItemInterface[] = [
  {
    degree: "Bachelors of Science in Computer Science",
    institution_name:
      "FAST National University of Computer and Emerging Sciences",
    start_date: "August 2019",
    end_date: "July 2023",
    location: "Islamabad, Pakistan",
    grade: "CGPA 3.43 / 4.00",
  },
  {
    degree: "A Levels",
    institution_name: "Al Majd International School",
    start_date: "September 2017",
    end_date: "June 2019",
    location: "Dammam, KSA",
    grade: "3 A's in Physics, Chemistry, and Mathematics",
  },
  {
    degree: "O Levels",
    institution_name: "Al Majd International School",
    start_date: "",
    end_date: "June 2017",
    location: "Dammam, KSA",
    grade:
      "5 A*'s in Physics, Chemistry, Biology, IT, and Mathematics. 1 A in English",
  },
];
