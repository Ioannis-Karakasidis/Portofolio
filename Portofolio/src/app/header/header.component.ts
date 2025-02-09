import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderlogoComponent } from '../headerlogo/headerlogo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderlogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isgerman = false;
  @Output() Isgerman = new EventEmitter<boolean>();

  changetogerman() {
    this.isgerman = true;
    this.Isgerman.emit(this.isgerman)
    
  }

  changetoenglish() {
    this.isgerman = false;
    this.Isgerman.emit(this.isgerman)

  }
}
