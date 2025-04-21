import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  currentLanguage!: string;
  contactForm!: UntypedFormGroup;

  submissionsCount = 0;
  maxSubmissions = 3;
  submissionCooldown = false;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid || this.submissionCooldown || this.contactForm.get('honeypot')?.value ) return;

    if (this.submissionsCount >= this.maxSubmissions) {
      this.submissionCooldown = true;
      setTimeout(() => {
        this.submissionsCount = 0;
        this.submissionCooldown = false;
      }, 1000 * 60 * 10);
      alert(this.currentLanguage === 'es'
        ? 'Has alcanzado el límite de envíos. Por favor, espera unos minutos antes de volver a intentarlo.'
        : 'You have reached the submission limit. Please wait a few minutes before trying again.');
      return;
    }

    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      subject: this.contactForm.value.reason,
      message: this.contactForm.value.message,
    };

    emailjs
      .send('service_ua3i7ks', 'template_135eepl', templateParams, 'OMdByV2ERx2aZ5W_3')
      .then(() => {
        alert(this.currentLanguage === 'es'
          ? 'Mensaje enviado con éxito.'
          : 'Message sent successfully.');
        this.contactForm.reset();
        this.submissionsCount++;
      })
      .catch((error) => {
        console.error('Error al enviar mensaje:', error);
        alert(this.currentLanguage === 'es'
          ? 'Ocurrió un error al enviar el mensaje.'
          : 'An error occurred while sending the message.');
      });
  }

  initForm(): UntypedFormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      reason: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
      honeypot: [''],
    });
  }
}
