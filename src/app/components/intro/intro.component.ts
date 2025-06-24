import { Component } from '@angular/core';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

  constructor(private st: StepperService) {
    
  }
  scrollToSection(sectionId: string) {
    this.st.scrollToSection(sectionId);
    // document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
