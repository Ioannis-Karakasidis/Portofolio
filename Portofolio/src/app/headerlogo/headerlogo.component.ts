import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headerlogo',
  standalone: true,
  imports: [],
  templateUrl: './headerlogo.component.html',
  styleUrl: './headerlogo.component.scss',
})
export class HeaderlogoComponent {
  @Input() isgerman: any;
  @Input() path: any;

}
