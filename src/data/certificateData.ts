export interface CertificateItemInterface {
  title: string;
  date: string;
  verification_link?: string;
}

export const certificateData: CertificateItemInterface[] = [
  {
    title: "Microsoft Azure AZ-900 Cloud Fundamentals",
    date: "May 2023",
    verification_link:
      "https://www.credly.com/badges/29c97a3b-22ec-4c52-9829-6f9c89f3ab37/",
  },
];
