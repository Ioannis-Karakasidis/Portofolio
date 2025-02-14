import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';

type ProjectKey = 'DABubble' | 'ElPocoLoco' | 'Join';

@Component({
  selector: 'app-myprojectssection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myprojectssection.component.html',
  styleUrl: './myprojectssection.component.scss',
})
export class MyprojectssectionComponent {
  activeProject: ProjectKey = 'DABubble';
  isgerman = inject(LanguageService);
  information = inject(LanguageService);
  showactiveclass($event: MouseEvent, projectId: string): void {
    const target = $event.target as HTMLElement;
    const parent = target?.parentElement;
    if (parent) {
      document.querySelectorAll('.myprojects-section > div').forEach((div) => {
        div.classList.remove('active');
      });
      parent.classList.add('active');
    }
    this.activeProject = projectId as ProjectKey;
  }
}
