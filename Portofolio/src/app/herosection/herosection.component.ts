import { Component, Input } from '@angular/core';
import { HeaderlogoComponent } from '../headerlogo/headerlogo.component';
import { ContacticonsComponent } from '../contacticons/contacticons.component';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [HeaderlogoComponent,ContacticonsComponent],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.scss',
})
export class HerosectionComponent {
  path = 'assets/img/Vector 29-1.png';
  @Input() Isgerman: any;
}
