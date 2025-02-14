import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}
  isgerman = false;

  setLanguage(value: boolean) {
    this.isgerman = value;
  }

  information = {
    DABubble: {
      preview: '../../assets/projectpreviews/Screenshot project.png',
      duration: '2 months',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      details: [
        {
          title: { en: 'About the project', de: 'Über das Projekt' },
          description: {
            en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            de: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
          },
        },
        {
          title: { en: 'How I have organised my work process', de: 'Wie ich meinen Arbeitsprozess organisiert habe' },
          description: {
            en: 'Posuere pretium arcu sed senectus felis acmau ris. Dui eget dict um. Desuere pretium arcu set senectus felis ac ma sed senectus felis acmatgh uris. Dui eget dicdah ugihighos ökegh tumosust ere.',
            de: 'Posuere pretium arcu sed senectus felis acmau ris. Dui eget dict um. Desuere pretium arcu set senectus felis ac ma sed senectus felis acmatgh uris. Dui eget dicdah ugihighos ökegh tumosust ere.',
          },
        },
        {
          title: { en: 'My group work experience', de: 'Meine Gruppenerfahrung' },
          description: {
            en: 'As part of a 3-person team in a 5-week project, my primary role involved implementing the authentication features and managing interactions on the board page.',
            de: 'Als Teil eines 3-Personen-Teams in einem 5-wöchigen Projekt bestand meine Hauptaufgabe darin, die Authentifizierungsfunktionen zu implementieren und die Interaktionen auf der Board-Seite zu verwalten.',
          },
        },
      ],
    },
    ElPocoLoco: {
      preview: '../../assets/projectpreviews/ElPocoLocopreview.png',
      duration: '2 months',
      technologies: ['HTML', 'Javascript', 'CSS'],
      details: [
        {
          title: { en: 'About the project', de: 'Über das Projekt' },
          description: {
            en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            de: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
          },
        },
        {
          title: { en: 'How I have organised my work process', de: 'Wie ich meinen Arbeitsprozess organisiert habe' },
          description: {
            en: 'Posuere pretium arcu sed senectus felis acmau ris. Dui eget dict um. Desuere pretium arcu set senectus felis ac ma sed senectus felis acmatgh uris. Dui eget dicdah ugihighos ökegh tumosust ere.',
            de: 'Posuere pretium arcu sed senectus felis acmau ris. Dui eget dict um. Desuere pretium arcu set senectus felis ac ma sed senectus felis acmatgh uris. Dui eget dicdah ugihighos ökegh tumosust ere.',
          },
        },
        {
          title: { en: '', de: '' },
          description: {
            en: 'As part of a 3-person team in a 5-week project, my primary role involved implementing the authentication features and managing interactions on the board page.',
            de: 'Als Teil eines 3-Personen-Teams in einem 5-wöchigen Projekt bestand meine Hauptaufgabe darin, die Authentifizierungsfunktionen zu implementieren und die Interaktionen auf der Board-Seite zu verwalten.',
          },
        },
      ],
    },
    Join: {
      preview: '../../assets/projectpreviews/Joinpreview.png',
      duration: '2 months',
      technologies: ['HTML', 'Javascript', 'CSS'],
      details: [
        {
          title: { en: 'About the project', de: 'Über das Projekt' },
          description: {
            en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            de: 'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
          },
        },
        {
          title: { en: 'How I have organised my work process', de: 'Wie ich meinen Arbeitsprozess organisiert habe' },
          description: {
            en: 'Posuere pretium arcu sed senectus felis acmau ris. Dui eget dict um. Desuere pretium arcu set senectus felis ac ma sed senectus felis acmatgh uris. Dui eget dicdah ugihighos ökegh tumosust ere.',
            de: 'Posuere pretium arcu sed senectus felis acmau ris. Dui eget dict um. Desuere pretium arcu set senectus felis ac ma sed senectus felis acmatgh uris. Dui eget dicdah ugihighos ökegh tumosust ere.',
          },
        },
        {
          title: { en: '', de: '' },
          description: {
            en: 'As part of a 3-person team in a 5-week project, my primary role involved implementing the authentication features and managing interactions on the board page.',
            de: 'Als Teil eines 3-Personen-Teams in einem 5-wöchigen Projekt bestand meine Hauptaufgabe darin, die Authentifizierungsfunktionen zu implementieren und die Interaktionen auf der Board-Seite zu verwalten.',
          },
        },
      ],
    },
  };
}
