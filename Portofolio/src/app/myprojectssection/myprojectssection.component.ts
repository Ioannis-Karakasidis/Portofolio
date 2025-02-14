import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

  information = {
    DABubble: {
      preview: '../../assets/projectpreviews/Screenshot project.png',
      duration: '2 months',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      details: [
        {
          title: 'About the project',
          description:
            'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        },
        {
          title: 'How I have organised my work process',
          description:
            'Posuere pretium arcu sed senectus felis acmau ris. Dui eget dict um. Desuere pretium arcu set senectus felis ac ma sed senectus felis acmatgh uris. Dui eget dicdah ugihighos ökegh tumosust ere.',
        },
        {
          title: 'My group work experience',
          description:
            'As part of a 3-person team in a 5-week project, my primary role involved implementing the authentication features and managing interactions on the board page.',
        },
      ],
    },
    ElPocoLoco: {
      preview: '../../assets/projectpreviews/ElPocoLocopreview.png',
      duration: '2 months',
      technologies: ['HTML', 'Javascript', 'CSS'],
      details: [
        {
          title: 'About the project',
          description:
            'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        },
        {
          title: 'How I have organised my work process',
          description:
            'Posuere pretium arcu sed senectus felis acmau ris. Dui eget dict um. Desuere pretium arcu set senectus felis ac ma sed senectus felis acmatgh uris. Dui eget dicdah ugihighos ökegh tumosust ere.',
        },
        {
          title: '',
          description:
            'As part of a 3-person team in a 5-week project, my primary role involved implementing the authentication features and managing interactions on the board page.',
        },
      ],
    },
    Join: {
      preview: '../../assets/projectpreviews/Joinpreview.png',
      duration: '2 months',
      technologies: ['HTML', 'Javascript', 'CSS'],
      details: [
        {
          title: 'About the project',
          description:
            'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        },
        {
          title: 'How I have organised my work process',
          description:
            'Posuere pretium arcu sed senectus felis acmau ris. Dui eget dict um. Desuere pretium arcu set senectus felis ac ma sed senectus felis acmatgh uris. Dui eget dicdah ugihighos ökegh tumosust ere.',
        },
        {
          title: '',
          description:
            'As part of a 3-person team in a 5-week project, my primary role involved implementing the authentication features and managing interactions on the board page.',
        },
      ],
    },
  };
}
