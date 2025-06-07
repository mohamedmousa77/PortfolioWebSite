import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, payment integration, and admin dashboard.',
      image: 'assets/images/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'assets/images/project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and interactive charts.',
      image: 'assets/images/project3.jpg',
      technologies: ['Vue.js', 'Chart.js', 'Weather API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      featured: false
    }
  ];

  filterProjects(showFeatured: boolean = false) {
    return showFeatured ? this.projects.filter(p => p.featured) : this.projects;
  }
}
