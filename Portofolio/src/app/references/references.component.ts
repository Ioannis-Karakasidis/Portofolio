import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  reference = [
    {
      title: '',
      projekt: 'DA Bublle',
      description: '',
    },
    {
      title: 'T. Sabanovic',
      projekt: 'Join',
      description:
        'Ioannis was a very reliable team member. What I particularly appreciated was how he always brought new ideas and quickly found solutions. Whenever tasks were assigned to him, he completed them reliably. Working with him was highly productive.',
    },
    {
      title: 'Maik Joe Sedlmaier',
      projekt: 'Join',
      description:
        'Ioannis is a highly skilled developer with a strong focus on frontend development and user experience. His creativity, attention to detail, and ability to translate complex ideas into intuitive designs set him apart. Ioannis is a reliable and innovative team player who always delivers exceptional work.',
    },
  ];

  
}
