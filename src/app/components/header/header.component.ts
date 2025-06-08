import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperService } from '../../services/stepper.service';
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private stepperSer: StepperService) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
  scrollToSection(sectionId: string) {
    this.stepperSer.scrollToSection(sectionId)
    // document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false;
  }

}
