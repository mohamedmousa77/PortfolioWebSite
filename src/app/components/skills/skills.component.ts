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
    { name: 'Angular', level: 90, icon: 'fab fa-angular' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'React', level: 75, icon: 'fab fa-react' },
    { name: 'Python', level: 70, icon: 'fab fa-python' },
    { name: 'MongoDB', level: 75, icon: 'fas fa-database' }
  ];

  tools = [
    'VS Code', 'Git', 'Docker', 'AWS', 'Firebase', 'Figma'
  ];
}
