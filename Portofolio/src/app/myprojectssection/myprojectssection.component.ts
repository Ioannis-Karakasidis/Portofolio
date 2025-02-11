import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myprojectssection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myprojectssection.component.html',
  styleUrl: './myprojectssection.component.scss',
})
export class MyprojectssectionComponent {
  activeProject: number = 1;

  showactiveclass($event: MouseEvent, projectId: number): void {
    const target = $event.target as HTMLElement;
    const parent = target?.parentElement;
    if (parent) {
      document.querySelectorAll('.myprojects-section > div').forEach((div) => {
        div.classList.remove('active');
      });
      parent.classList.add('active');
    }
    this.activeProject = projectId;
  }
}
