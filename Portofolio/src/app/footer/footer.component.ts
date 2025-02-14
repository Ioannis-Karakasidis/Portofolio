import { Component, Input } from '@angular/core';
import { HeaderlogoComponent } from '../headerlogo/headerlogo.component';
import { ContacticonsComponent } from '../contacticons/contacticons.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HeaderlogoComponent, ContacticonsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() Isgerman: any;
}
