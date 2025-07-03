import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contacts',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})

export class ContactsComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Handle form submission here
      console.log('Form submitted:', this.contactForm.value);
      
      const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    };

     emailjs.send(
      'service_i33f9fm',         // ✅ Il tuo Service ID
      'template_sbm2j6l',         // ✅ Il tuo Template ID (da EmailJS)
      templateParams,
      'RovFvQJq-a5oxrNYO'        // ✅ La tua Public Key (da "Account > API Keys")
    )
    .then(() => {
      alert('Messaggio inviato con successo!');
      this.contactForm.reset();
      this.isSubmitting = false;
    })
    .catch((error) => {
      console.error('Errore nell\'invio:', error);
      alert('Si è verificato un errore. Riprova più tardi.');
      this.isSubmitting = false;
    });

      // Simulate API call
      // setTimeout(() => {
      //   this.isSubmitting = false;
      //   this.contactForm.reset();
      //   alert('Message sent successfully!');
      // }, 2000);
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} is too short`;
    }
    return '';
  }
}
