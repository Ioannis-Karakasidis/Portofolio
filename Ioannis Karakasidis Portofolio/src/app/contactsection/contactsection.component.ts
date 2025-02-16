import { Component, ElementRef, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../language.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactsection',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './contactsection.component.html',
  styleUrl: './contactsection.component.scss',
})
export class ContactsectionComponent {
  readpolicy = false;
  Checked = false;
  width = '85%';
  http = inject(HttpClient);
  Email: string = 'gianniskarakasidhs@hotmail.com';
  isgerman = inject(LanguageService);
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
    if (ngForm.submitted && ngForm.form.valid && this.readpolicy) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            ngForm.reset();
            this.readpolicy = false;
            this.Checked = false;
            console.info('send post complete');
          },
        });
    }
  }

  changepic() {
    if (this.Checked === false) {
      this.Checked = true;
      this.readpolicy = true;
    } else {
      this.Checked = false;
    }
  }
}
