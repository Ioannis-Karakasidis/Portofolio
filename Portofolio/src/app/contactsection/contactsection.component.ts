import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../language.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactsection',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactsection.component.html',
  styleUrl: './contactsection.component.scss',
})
export class ContactsectionComponent {
  http = inject(HttpClient);
  Email: string = 'gianniskarakasidhs@hotmail.com';
  isgerman = inject(LanguageService);
  @ViewChild('checked') checked!: ElementRef;
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://ioanniskarakasidis.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.checked) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      ngForm.resetForm();
    }
  }

  changepic() {
    const imgElement = this.checked.nativeElement;
    const currentSrc = imgElement.src.split('/').pop();
    if (currentSrc !== 'Checkboxchecked.png') {
      imgElement.src = '../../assets/img/Checkboxchecked.png';
    } else {
      imgElement.src = '../../assets/img/Checkboxunchecked.png';
    }
  }
}
