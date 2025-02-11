import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactsection',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactsection.component.html',
  styleUrl: './contactsection.component.scss',
})
export class ContactsectionComponent {
  email: string = 'gianniskarakasidhs@hotmail.com';

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log(this.contactData);
  }
}
