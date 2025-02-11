import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { WhymeComponent } from './whyme/whyme.component';
import { MyskillComponent } from './myskill/myskill.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HerosectionComponent,
    WhymeComponent,
    MyskillComponent,
    ReferencesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portofolio';
  Isgerman = false;

  updatelanguage(value: boolean) {
    this.Isgerman = value;
  }
}
