import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
technicalSkills = [
  { name: 'Angular', level: 80, icon: 'fab fa-angular' },
  { name: 'ASP.NET', level: 80, icon: 'fas fa-code' },               // ASP.NET (no brand icon available)
  { name: 'TypeScript', level: 85, icon: 'devicon-typescript-plain colored' }, // Better with devicon
  { name: 'HTML, JS & CSS', level: 85, icon: 'fab fa-html5' },       // HTML5 logo
  { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
  { name: 'Flutter', level: 90, icon: 'devicon-flutter-plain colored' },       // Better with devicon
  { name: 'Dart', level: 90, icon: 'devicon-dart-plain colored' },             // Dart proper icon
  { name: 'WordPress', level: 70, icon: 'fab fa-wordpress' },
  { name: 'No SQL Fire Base', level: 75, icon: 'fas fa-fire' },      // Firebase flame icon
  { name: 'SQL Data base', level: 75, icon: 'fas fa-database' }
];
  tools = [
    'VS Code', 'Visual Studio','Android Studio','WordPress','Rest API','Swegger','Post Man','Git', 'Firebase', 'Figma'
  ];
}
