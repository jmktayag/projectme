import { ProjectsByCategory } from './types';
import { softwareProjects } from './software';
import { bookProjects } from './books';
import { woodworkingProjects } from './woodworking';

export const projects: ProjectsByCategory = {
  'Software Development': softwareProjects,
  'Books': bookProjects,
  'Woodworking': woodworkingProjects
};

export { softwareProjects, bookProjects, woodworkingProjects }; 