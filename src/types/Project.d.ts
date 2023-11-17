export interface Project {
  id: string;
  name: string;
  date?: string;
  version?: string;
  spotlight?: boolean;
  team?: string;
  shortDescription: string;
  imageUrl: string;
  sourceUrl?: string;
  demoUrl?: string;
}
