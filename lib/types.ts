export type Project = {
  id?: string;
  slug: string;
  title: string;
  eyebrow?: string;
  summary: string;
  description?: string;
  category: string;
  hardware?: string[];
  software?: string[];
  technologies: string[];
  timeline?: string;
  metrics?: { value: string; label: string }[];
  featured?: boolean;
  thumbnail_url?: string;
  gallery?: { url: string; caption?: string }[];
  videos?: { url: string; title?: string }[];
  github_url?: string;
  paper_url?: string;
};

export type Experience = {
  id?: string;
  organization: string;
  role: string;
  location?: string;
  start_date: string;
  end_date?: string;
  description: string;
  technologies: string[];
};

export type Publication = {
  id?: string;
  title: string;
  venue: string;
  year: string;
  status: string;
  paper_id?: string;
  abstract: string;
  pdf_url?: string;
  external_url?: string;
};

export type Patent = {
  id?: string;
  title: string;
  type: string;
  status: string;
  application_no?: string;
  year: string;
  description: string;
  document_url?: string;
};

export type Certificate = {
  id?: string;
  title: string;
  issuer: string;
  location: string;
  date: string;
  category?: string;
  image_url?: string;
  pdf_url?: string;
  description?: string;
  credential_id?: string;
};

export type EventItem = {
  id?: string;
  title: string;
  organizer: string;
  date: string;
  role?: string;
  description: string;
};
