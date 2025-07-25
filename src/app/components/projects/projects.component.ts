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
      title: 'Personal Finance App',
      image:'Overview-page.jpg',
      description: `
      This is a personal finance web application that helps users manage their budget, track transactions, 
      organize savings into pots, and monitor recurring bills
      Tech Stack Highlights: Front end: Angular (modular components, routing, responsive UI, charts)
      Back end: ASP.NET Core Web API with Entity Framework Core + SQL Server
      Clean REST architecture for smooth front‑back communication
      `,
      technologies: ['Angular', 'ASP.NET', 'SSMS'],
      liveUrl: 'https://www.linkedin.com/posts/mohamedmousa-_newly-developed-a-personal-finance-web-activity-7346193178972073984-Ju-1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2EQFwBWq7g1Ci3vEvUZMVDQ8EeZTv42JY',
      githubUrl: 'https://github.com/mohamedmousa77/FinancialApp',
      featured: true
    },
    {
      id: 2,
      title: 'Wafra',
      image:'wafraa.png',
      description: `Wafra is a sleek, user-friendly e-commerce mobile application developed using Flutter, designed for seamless 
      performance on both iOS and Android devices. This app allows users to browse and shop from a wide range of categories 
      including fashion, electronics, and lifestyle products, with intuitive navigation and clean UI design. The backend is connected 
      via RESTful APIs, ensuring efficient data handling and a smooth user experience.
      `,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://www.linkedin.com/in/mohamedmousa-/',
      githubUrl: 'https://github.com/mohamedmousa77/Wafra',
      featured: false
    },    
    {
      id: 3,
      title: 'Multi Step Form',
      description: `Enable users to complete each step of a multi-step sequence with the ability to go back and update selections, 
      view a final summary for confirmation, experience a responsive interface optimized for all screen sizes, interact with clearly 
      styled hover and focus states, and receive real-time validation messages for missed fields, incorrectly formatted emails, or incomplete steps.`,
      image: 'multi-step-form.png',
      technologies: ['Angular', 'CSS', 'TypeScript'],
      liveUrl: 'https://www.linkedin.com/in/mohamedmousa-/',
      githubUrl: 'https://github.com/mohamedmousa77/multi-step-form',
      featured: true
    },
    
    {
      id: 4,
      title: 'Rock Paper Scissors',
      description: `Allow users to enjoy an optimized game layout across all screen sizes as they play Rock, Paper, Scissors 
      against the computer, with optional features including score persistence after browser refresh and an extended mode featuring 
      Rock, Paper, Scissors, Lizard, Spock.`,
      image: 'rock-paper-scissors-cover-img.png',
      technologies: ['HTML', 'Java Script', 'TypeScripy', 'CSS'],
      liveUrl: 'https://www.linkedin.com/in/mohamedmousa-/',
      githubUrl: 'https://github.com/mohamedmousa77/Rock--Paper--Scissors-game',
      featured: true
    },
    
    {
      id: 5,
      title: 'Connect 4 Game',
      description: `An interactive Connect Four game for the web, playable in your browser with a clean UI and smart AI opponent. 
      Built using Angular, TypeScript and CSS, this project lets you test your strategy skills against a computer that doesn’t 
      go easy on you.`,
      image: 'connect-4-game.jpg',
      technologies: ['Angular', 'Type Scripy', 'CSS'],
      liveUrl: 'https://www.linkedin.com/posts/mohamedmousa-_excited-to-share-my-latest-project-connectfour-activity-7347985200208928769-kzmN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2EQFwBWq7g1Ci3vEvUZMVDQ8EeZTv42JY',
      githubUrl: 'https://github.com/mohamedmousa77/Connect-Four-Game',
      featured: true
    },
    {
      id: 6,
      title: 'Attendance Management',
      image:'attendance-cover-img.png',
      description: `Attendance revolutionizes workforce management by providing an all-in-one solution for tracking attendance, 
      handling employee requests, and generating actionable insights—built with Flutter to ensure a smooth and consistent experience 
      on both iOS and Android.`,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://www.linkedin.com/posts/mohamedmousa-_flutter-flutterdev-flutterdeveloper-activity-6951485857065234432-BBfI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2EQFwBWq7g1Ci3vEvUZMVDQ8EeZTv42JY',
      githubUrl: 'https://github.com/mohamedmousa77/Attendance-App',
      featured: false
    },
    {
      id: 7,
      title: 'Let’s Fly Application',
      image:'your-trip-cover-img.jpg',
      description: `Let’s Fly brings your vision to life with a beautifully designed Flutter app, delivering a seamless and intuitive user experience across platforms.`,
      technologies: ['Flutter', 'Dart','Figma'],
      liveUrl: 'https://www.linkedin.com/in/mohamedmousa-/',
      githubUrl: 'https://github.com/mohamedmousa77/Your-Trip',
      featured: false
    },    
    {
      id: 8,
      title: 'WhatsApp Clone',
      image:'social-wa-cover-img.png',
      description: `A real-time chat application replicating WhatsApp’s core features, 
      including messaging, voice calls, media sharing, and status updates, built with Flutter for cross-platform support.`,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://www.linkedin.com/in/mohamedmousa-',
      githubUrl: 'https://github.com/mohamedmousa77',
      featured: false
    },
    {
      id: 9,
      title: 'Instgram and Facebook clone',
      image:'social-insta-cover-img.png',
      description: `A social media fusion app inspired by Instagram and Facebook, allowing users to share updates, 
      connect with friends, and engage through photos, posts, and reactions—optimized with Flutter for both platforms.`,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://github.com/mohamedmousa77/Insta-Clone',
      githubUrl: 'https://github.com/mohamedmousa77/FaceBook',
      featured: false
    },
    {
      id: 10,
      title: 'TikTok Application Clone',
      image:'social-tiktok-cover-img.png',
      description: `This TikTok clone recreates the fun of endless video 
      content with smooth transitions, user interaction features, and a clean, responsive design across mobile devices.`,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://www.linkedin.com/in/mohamedmousa-/',
      githubUrl: 'https://github.com/mohamedmousa77/Tik-Tok-Clone',
      featured: false
    },
    {
      id: 11,
      title: 'Lost & Found',
      image:'lost-nd-found-cover-img.png',
      description: `Easily reunite lost items with their rightful owners using Lost & Found—a user-friendly mobile app available 
      on both iOS and Android that builds a supportive digital community dedicated to recovering lost belongings and spreading goodwill.`,
      technologies: ['Flutter', 'Dart', 'Rest API', 'Post Man'],
      liveUrl: 'https://www.linkedin.com/in/mohamedmousa-/',
      githubUrl: 'https://github.com/mohamedmousa77/Lost-And-Found-Application',
      featured: false
    },
    {
      id: 12,
      title: 'E-commerce product page',
      image:'product-page-img-cover.png',
      description: `This responsive e-commerce product page allows users to view a lightbox gallery, switch product images via thumbnails, 
      add and remove items from the cart, and enjoy an optimized layout with clear hover states across all interactive elements and screen  
      sizes.`,
      technologies: ['HTML', 'Js', 'Ts', 'CSS'],
      liveUrl: 'https://www.linkedin.com/in/mohamedmousa-/',
      githubUrl: 'https://github.com/mohamedmousa77/E-commerce-page',
      featured: false
    },
    {
      id: 13,
      title: 'Point Of Sale',
      description: `It’s revolutionizes 
      workforce management, offering a comprehensive solution for companies to effortlessly track employee attendance, requests, 
      and related insights. With dual interfaces catering to both managers and employees, the app streamlines communication and 
      enhances transparency within the workplace. Utilizing Flutter for cross-platform functionality, “Attendance” ensures a 
      seamless experience for users on both App Store and Play Store.`,
      image: 'pos-cover-img.png',
      technologies: ['Flutter', 'Dart', 'Rest API'],
      liveUrl: 'https://www.linkedin.com/posts/mohamedmousa-_flutter-flutterdev-flutterdeveloper-activity-6940025351460765696-hSEZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC2EQFwBWq7g1Ci3vEvUZMVDQ8EeZTv42JY',
      githubUrl: 'https://github.com/mohamedmousa77/Point-Of-Sale-Application',
      featured: true
    },
  ];
  expanded: boolean[] = [];

  ngOnInit() {
    this.expanded = this.projects.map(() => false); // inizializza array con false
  }

  toggleExpand(index: number) {
    this.expanded[index] = !this.expanded[index];
  }


  filterProjects(showFeatured: boolean = false) {
    return showFeatured ? this.projects.filter(p => p.featured) : this.projects;
  }
}
