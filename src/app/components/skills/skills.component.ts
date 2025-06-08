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
    { name: 'ASP.NET', level: 80, icon: 'fab fa-angular' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'HTML, Js and CSS', level: 85, icon: 'fab fa-js-square' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'Flutter', level: 90, icon: 'fab fa-react' },
    { name: 'Dart', level: 90, icon: 'fab fa-python' },
    { name: 'WordPress', level: 70, icon: 'fab fa-python' },
    { name: 'Fire Base', level: 75, icon: 'fas fa-database' },
    { name: 'Rest API', level: 75, icon: 'fas fa-database' }
  ];

  tools = [
    'VS Code', 'Visual Studio','Android Studio','WordPress','Rest API','Swegger','Post Man','Git', 'Firebase', 'Figma'
  ];
}
