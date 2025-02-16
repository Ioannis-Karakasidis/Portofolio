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
      link: '',
      Github: '',
      preview: '../../assets/projectpreviews/Screenshot project.png',
      duration: '2 months',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      details: [
        {
          title: { en: 'About the project', de: 'Über das Projekt' },
          description: {
            en: 'A business chat client designed for professional communication, offering features similar to Discord, WhatsApp, and Slack, but tailored for workplace collaboration.',
            de: 'Ein Business-Chat-Client für professionelle Kommunikation, mit Funktionen ähnlich wie Discord, WhatsApp und Slack, aber speziell für die Zusammenarbeit im Arbeitsumfeld optimiert.',
          },
        },
        {
          title: {
            en: 'Features and Technologies',
            de: 'Funktionen und Technologien',
          },
          description: {
            en: 'Developed using modern web technologies, the platform includes real-time messaging, user authentication, file sharing, and role-based access control.',
            de: 'Entwickelt mit modernen Web-Technologien, bietet die Plattform Echtzeit-Messaging, Benutzer-Authentifizierung, Dateifreigabe und rollenbasierte Zugriffskontrolle.',
          },
        },
        {
          title: {
            en: 'My contribution to the project',
            de: 'Mein Beitrag zum Projekt',
          },
          description: {
            en: 'I focused on implementing the front-end interface, optimizing real-time chat interactions, and ensuring a seamless user experience across different devices.',
            de: 'Ich habe mich auf die Implementierung der Frontend-Oberfläche konzentriert, die Optimierung der Echtzeit-Chat-Interaktionen übernommen und für eine nahtlose Benutzererfahrung auf verschiedenen Geräten gesorgt.',
          },
        },
      ],
    },
    ElPocoLoco: {
      link: 'https://elpocoloco.ioanniskarakasidis.com/index.html',
      preview: '../../assets/projectpreviews/ElPocoLocopreview.png',
      Github:
        'https://github.com/Ioannis-Karakasidis/Portofolio/tree/main/El%20Poco%20loco',
      duration: '2 months',
      technologies: ['HTML', 'Javascript', 'CSS'],
      details: [
        {
          title: { en: 'About the project', de: 'Über das Projekt' },
          description: {
            en: 'A Jump-and-Run game that brings joy to players of all ages. You take on the role of the hero, controlling the game mechanics and logic while applying advanced object-oriented programming concepts.',
            de: 'Ein Jump-and-Run-Spiel, das Spieler jeden Alters begeistert. Du bist der Held hinter der Action und steuerst die Spiellogik, während du fortgeschrittene objektorientierte Programmierkonzepte anwendest.',
          },
        },
        {
          title: {
            en: 'How I have organised my work process',
            de: 'Wie ich meinen Arbeitsprozess organisiert habe',
          },
          description: {
            en: 'I structured my development process by defining core gameplay mechanics, setting up an object-oriented architecture, and iterating through prototypes based on feedback.',
            de: 'Ich habe meinen Entwicklungsprozess organisiert, indem ich die Kernmechaniken des Spiels definiert, eine objektorientierte Architektur aufgebaut und Prototypen basierend auf Feedback iteriert habe.',
          },
        },
        {
          title: { en: 'My role in the project', de: 'Meine Rolle im Projekt' },
          description: {
            en: 'I was responsible for implementing the character controls, collision detection, and game physics. Additionally, I optimized performance and ensured smooth animations for an engaging player experience.',
            de: 'Ich war verantwortlich für die Implementierung der Charaktersteuerung, Kollisionsabfrage und Spielphysik. Zudem habe ich die Performance optimiert und flüssige Animationen für ein fesselndes Spielerlebnis sichergestellt.',
          },
        },
      ],
    },
    Join: {
      link: 'https://join.ioanniskarakasidis.com/index.html',
      preview: '../../assets/projectpreviews/Joinpreview.png',
      Github:
        'https://github.com/Ioannis-Karakasidis/Portofolio/tree/main/Join',
      duration: '2 months',
      technologies: ['HTML', 'Javascript', 'CSS'],
      details: [
        {
          title: { en: 'About the project', de: 'Über das Projekt' },
          description: {
            en: 'Together with other participants from the training program, you develop a web app using HTML, CSS, JavaScript, Git, and Firebase. The goal is to create a project management tool to visualize task statuses and responsibilities.',
            de: 'Zusammen mit anderen Teilnehmern aus der Weiterbildung baust du eine Web-App mit HTML, CSS, JavaScript, Git und Firebase. Ziel ist es, ein Projektmanagement-Tool zu erstellen, um den Status und die Verantwortlichkeiten von Aufgaben zu visualisieren.',
          },
        },
        {
          title: {
            en: 'How I have organised my work process',
            de: 'Wie ich meinen Arbeitsprozess organisiert habe',
          },
          description: {
            en: 'I structured my workflow by breaking tasks into milestones, ensuring smooth collaboration through Git version control, and using Firebase for real-time database management.',
            de: 'Ich habe meinen Arbeitsprozess organisiert, indem ich Aufgaben in Meilensteine unterteilt, eine reibungslose Zusammenarbeit über Git-Versionierung sichergestellt und Firebase für das Echtzeit-Datenbankmanagement genutzt habe.',
          },
        },
        {
          title: { en: 'My role in the project', de: 'Meine Rolle im Projekt' },
          description: {
            en: 'My primary role involved implementing the authentication system, managing task interactions, and ensuring a responsive user interface for an intuitive experience.',
            de: 'Meine Hauptaufgabe bestand darin, das Authentifizierungssystem zu implementieren, die Aufgabeninteraktionen zu verwalten und eine responsive Benutzeroberfläche für eine intuitive Nutzung zu gewährleisten.',
          },
        },
      ],
    },
  };
}
