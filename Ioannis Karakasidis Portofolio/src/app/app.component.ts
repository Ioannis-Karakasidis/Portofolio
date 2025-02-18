import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // Initialize AOS once on component initialization
    AOS.init();
  }

  // Drag-over handler to allow drop
  onDragOver(event: DragEvent) {
    event.preventDefault(); // This is required to allow the drop
  }

  // Drop handler
  onDrop(event: DragEvent) {
    event.preventDefault(); // Prevent default drop action
    console.log('Drop event triggered');
    
    // Refresh AOS to trigger the "fade-right" animation
    AOS.refresh();
  }
}
