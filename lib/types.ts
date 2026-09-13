export type Experience = {
  organization: string;
  role: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  technologies: string[];
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  patent_status?: string; 
  summary: string;
  description: string;
  category: string;
  timeline: string;
  hardware: string[];
  software: string[];
  technologies: string[];
  metrics?: { value: string; label: string }[];
  achievements?: string[]; 
  gallery?: { url: string; caption: string }[];
  github_url?: string;
  paper_url?: string;
  featured: boolean;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  status: string;
  paper_id?: string;
  abstract: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  location: string;
  date: string;
  category: string;
  image_url: string;
  pdf_url: string;
  description: string;
};

export type Patent = {
  title: string;
  type: string;
  status: string;
  year: string;
  description: string;
};

export type EventItem = {
  title: string;
  organizer: string;
  date: string;
  role: string;
  description: string;
};
