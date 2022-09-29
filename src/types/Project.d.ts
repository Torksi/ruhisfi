export interface Project {
  id: string;
  name: string;
  date?: string;
  version?: string;
  spotlight?: boolean;
  team?: string;
  shortDescription: string;
  longDescription?: string;
  imageUrl: string;
  sourceUrl?: string;
  demoUrl?: string;
  languages: string[];
  frameworks: string[];
}
