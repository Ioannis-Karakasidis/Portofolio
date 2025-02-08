import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isgerman = false;
  

  changetogerman() {
    this.isgerman = true;
    console.log(this.isgerman);
  }

  changetoenglish() {
    this.isgerman = false;
    console.log(this.isgerman);
    
  }
}
