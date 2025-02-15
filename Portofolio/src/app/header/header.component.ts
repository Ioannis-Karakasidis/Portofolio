import { Component, EventEmitter, inject, Output } from '@angular/core';
import { HeaderlogoComponent } from '../headerlogo/headerlogo.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderlogoComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  languageService = inject(LanguageService);
  changetogerman() {
    this.languageService.setLanguage(true);
  }

  changetoenglish() {
    this.languageService.setLanguage(false);
  }
}
