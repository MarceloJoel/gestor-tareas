import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Interpolación
  protected readonly title = signal('Gestor de Tareas');

  // Fecha actual, mostrada con el pipe "date: 'fullDate'"
  protected readonly today = signal(new Date());

  // Two-Way Data Binding: texto sincronizado con [(ngModel)]
  protected nuevaTarea = '';

  // Arreglo de tareas
  protected readonly tareas = signal<string[]>([]);

  // Evento (click): agrega el texto actual al arreglo de tareas
  protected guardarTarea(): void {
    const texto = this.nuevaTarea.trim();
    if (!texto) {
      return;
    }
    this.tareas.update((lista) => [...lista, texto]);
    this.nuevaTarea = '';
  }

  protected eliminarTarea(index: number): void {
    this.tareas.update((lista) => lista.filter((_, i) => i !== index));
  }
}
