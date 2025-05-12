
export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  category: string;
  description: string;
  eligibility: string[];
  requirements: string[];
  coverImage: string;
}

export const scholarships: Scholarship[] = [
  {
    id: "sch-001",
    title: "Future Leaders Scholarship",
    provider: "Global Education Fund",
    amount: "$10,000",
    deadline: "2023-08-15",
    category: "Undergraduate",
    description: "The Future Leaders Scholarship is designed for exceptional undergraduate students showing leadership potential and academic excellence. This scholarship aims to support students who demonstrate a commitment to making a positive impact in their communities.",
    eligibility: [
      "Enrolled in an accredited undergraduate program",
      "Minimum GPA of 3.5",
      "Demonstrated leadership experience",
      "Financial need"
    ],
    requirements: [
      "Official transcripts",
      "Two letters of recommendation",
      "Personal statement",
      "Resume/CV"
    ],
    coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "sch-002",
    title: "STEM Excellence Grant",
    provider: "Innovation Technology Foundation",
    amount: "$15,000",
    deadline: "2023-09-30",
    category: "Graduate",
    description: "The STEM Excellence Grant supports graduate students pursuing advanced degrees in Science, Technology, Engineering, and Mathematics fields. This grant aims to foster innovation and research in these critical areas.",
    eligibility: [
      "Enrolled in a graduate program in STEM field",
      "Minimum GPA of 3.7",
      "Research proposal",
      "U.S. Citizen or permanent resident"
    ],
    requirements: [
      "Research proposal (5-10 pages)",
      "Academic transcripts",
      "Three letters of recommendation",
      "Statement of purpose"
    ],
    coverImage: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "sch-003",
    title: "Creative Arts Scholarship",
    provider: "National Arts Foundation",
    amount: "$7,500",
    deadline: "2023-10-15",
    category: "Undergraduate",
    description: "The Creative Arts Scholarship supports undergraduate students pursuing degrees in visual arts, performing arts, creative writing, film, or other creative disciplines. This scholarship recognizes artistic talent and creative potential.",
    eligibility: [
      "Enrolled in an arts program",
      "Portfolio submission",
      "Minimum GPA of 3.0",
      "Demonstrated artistic achievement"
    ],
    requirements: [
      "Portfolio of work",
      "Artist statement",
      "Academic transcripts",
      "Two letters of recommendation"
    ],
    coverImage: "https://images.unsplash.com/photo-1577083552450-6a1ddf9d0fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "sch-004",
    title: "Community Service Grant",
    provider: "Civic Engagement Alliance",
    amount: "$5,000",
    deadline: "2023-11-01",
    category: "All Levels",
    description: "The Community Service Grant recognizes students who have demonstrated exceptional commitment to community service and volunteer work. This grant supports students who are making a difference in their communities while pursuing their education.",
    eligibility: [
      "Minimum of 100 hours of community service in the past year",
      "Enrolled in an accredited program (any level)",
      "Minimum GPA of 3.0",
      "Demonstrated leadership in service activities"
    ],
    requirements: [
      "Documentation of service hours",
      "Personal essay on community impact",
      "Two letters of recommendation from service organizations",
      "Academic transcripts"
    ],
    coverImage: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "sch-005",
    title: "International Student Fellowship",
    provider: "Global Education Initiative",
    amount: "$20,000",
    deadline: "2023-12-01",
    category: "Graduate",
    description: "The International Student Fellowship supports exceptional international students pursuing graduate studies. This fellowship aims to promote global education exchange and cultural diversity in academic institutions.",
    eligibility: [
      "International student status",
      "Admitted to a graduate program",
      "Exceptional academic achievement",
      "Financial need"
    ],
    requirements: [
      "Research or study proposal",
      "Academic transcripts",
      "Three letters of recommendation",
      "Personal statement",
      "Proof of English proficiency"
    ],
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "sch-006",
    title: "First Generation Scholar Award",
    provider: "Educational Opportunity Foundation",
    amount: "$12,500",
    deadline: "2023-09-15",
    category: "Undergraduate",
    description: "The First Generation Scholar Award supports undergraduate students who are the first in their families to attend college. This scholarship aims to break down barriers to higher education and support students in achieving their academic goals.",
    eligibility: [
      "First-generation college student",
      "Undergraduate enrollment",
      "Minimum GPA of 3.0",
      "Demonstrated financial need"
    ],
    requirements: [
      "Personal essay on being first-generation",
      "Academic transcripts",
      "Two letters of recommendation",
      "Financial aid information"
    ],
    coverImage: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];
