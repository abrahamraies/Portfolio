import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  currentLanguage!: string;
  contactForm!: UntypedFormGroup;

  constructor(private readonly fb: UntypedFormBuilder,private languageService: LanguageService) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.languageService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  onSubmit(): void {
    //console.log(this.contactForm.value);
  }

  initForm(): UntypedFormGroup {
    return this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.minLength(3),Validators.email]],
      reason: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(200)]],
      message: ['',[Validators.required, Validators.minLength(20),Validators.maxLength(500)]],
    })
  }


}
