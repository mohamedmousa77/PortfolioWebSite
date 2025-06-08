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
      title: 'Point Of Sale',
      description: `It’s revolutionizes 
      workforce management, offering a comprehensive solution for companies to effortlessly track employee attendance, requests, 
      and related insights. With dual interfaces catering to both managers and employees, the app streamlines communication and 
      enhances transparency within the workplace. Utilizing Flutter for cross-platform functionality, “Attendance” ensures a 
      seamless experience for users on both App Store and Play Store.`,
      image: 'pos-cover-img.png',
      technologies: ['Flutter', 'Dart', 'API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/username/project',
      featured: true
    },
    {
      id: 2,
      title: 'Rock Paper Scissors',
      description: `Allow users to enjoy an optimized game layout across all screen sizes as they play Rock, Paper, Scissors 
      against the computer, with optional features including score persistence after browser refresh and an extended mode featuring 
      Rock, Paper, Scissors, Lizard, Spock.`,
      image: 'rock-paper-scissors-cover-img.png',
      technologies: ['HTML', 'Java Script', 'TypeScripy', 'CSS'],
      liveUrl: 'https://github.com/mohamedmousa77/Rock--Paper--Scissors-game',
      githubUrl: 'https://github.com/mohamedmousa77/Rock--Paper--Scissors-game',
      featured: true
    },
    // Task Management App
    // A collaborative task management application with real-time updates and team collaboration features.
    // title: 'Weather Dashboard',
    // description: 'A responsive weather application with location-based forecasts and interactive charts.',  
    {
      id: 3,
      title: 'Multi Step Form',
      description: `Enable users to complete each step of a multi-step sequence with the ability to go back and update selections, 
      view a final summary for confirmation, experience a responsive interface optimized for all screen sizes, interact with clearly 
      styled hover and focus states, and receive real-time validation messages for missed fields, incorrectly formatted emails, or incomplete steps.`,
      image: 'multi-step-form.png',
      technologies: ['Angular', 'CSS'],
      liveUrl: 'https://github.com/mohamedmousa77/multi-step-form',
      githubUrl: 'https://github.com/mohamedmousa77/multi-step-form',
      featured: true
    },
    {
      id: 4,
      title: 'Wafra',
      image:'wafraa.png',
      description: `Wafra is a sleek, user-friendly e-commerce app developed with Flutter for smooth performance on both iOS and Android, 
      offering a diverse selection of fashion, electronics, and lifestyle products; the repository is private due to client 
      confidentiality—feel free to contact me for access. `,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://github.com/mohamedmousa77/multi-step-form',
      githubUrl: 'https://github.com/mohamedmousa77/Wafra',
      featured: false
    },
    {
      id: 5,
      title: 'Let’s Fly Application',
      image:'your-trip-cover-img.jpg',
      description: `Let’s Fly brings your vision to life with a beautifully designed Flutter app, delivering a seamless and intuitive user experience across platforms.`,
      technologies: ['Flutter', 'Dart'],
      liveUrl: 'https://github.com/mohamedmousa77/multi-step-form',
      githubUrl: 'https://github.com/mohamedmousa77/Wafra',
      featured: false
    },
    {
      id: 6,
      title: 'Attendance Management',
      image:'attendance-cover-img.png',
      description: `Attendance revolutionizes workforce management by providing an all-in-one solution for tracking attendance, 
      handling employee requests, and generating actionable insights—built with Flutter to ensure a smooth and consistent experience 
      on both iOS and Android.`,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://github.com/mohamedmousa77/multi-step-form',
      githubUrl: 'https://github.com/mohamedmousa77/Wafra',
      featured: false
    },
    {
      id: 7,
      title: 'WhatsApp Clone',
      image:'social-wa-cover-img.png',
      description: `A real-time chat application replicating WhatsApp’s core features, 
      including messaging, voice calls, media sharing, and status updates, built with Flutter for cross-platform support.`,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://github.com/mohamedmousa77/multi-step-form',
      githubUrl: 'https://github.com/mohamedmousa77/Wafra',
      featured: false
    },
    {
      id: 8,
      title: 'Instgram and Facebook clone',
      image:'social-insta-cover-img.png',
      description: `A social media fusion app inspired by Instagram and Facebook, allowing users to share updates, 
      connect with friends, and engage through photos, posts, and reactions—optimized with Flutter for both platforms.`,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://github.com/mohamedmousa77/multi-step-form',
      githubUrl: 'https://github.com/mohamedmousa77/Wafra',
      featured: false
    },
    {
      id: 9,
      title: 'TikTok Application Clone',
      image:'social-tiktok-cover-img.png',
      description: `This TikTok clone recreates the fun of endless video 
      content with smooth transitions, user interaction features, and a clean, responsive design across mobile devices.`,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://github.com/mohamedmousa77/multi-step-form',
      githubUrl: 'https://github.com/mohamedmousa77/Wafra',
      featured: false
    },
    {
      id: 10,
      title: 'Lost & Found',
      image:'lost-nd-found-cover-img.png',
      description: `Easily reunite lost items with their rightful owners using Lost & Found—a user-friendly mobile app available 
      on both iOS and Android that builds a supportive digital community dedicated to recovering lost belongings and spreading goodwill.`,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://github.com/mohamedmousa77/multi-step-form',
      githubUrl: 'https://github.com/mohamedmousa77/Wafra',
      featured: false
    },
    {
      id: 11,
      title: 'E-commerce product page',
      image:'product-page-img-cover.png',
      description: `This responsive e-commerce product page allows users to view a lightbox gallery, switch product images via thumbnails, 
      add and remove items from the cart, and enjoy an optimized layout with clear hover states across all interactive elements and screen  
      sizes.`,
      technologies: ['HTML', 'Js', 'Ts', 'CSS'],
      liveUrl: 'https://github.com/mohamedmousa77/E-commerce-page',
      githubUrl: 'https://github.com/mohamedmousa77/E-commerce-page',
      featured: false
    },
  ];

  filterProjects(showFeatured: boolean = false) {
    return showFeatured ? this.projects.filter(p => p.featured) : this.projects;
  }
}
