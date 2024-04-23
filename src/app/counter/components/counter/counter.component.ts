import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h3>Counter: {{ counter }}</h3>
    <button (click)="incrementar(1)">Sumar</button>
    <button (click)="reiniciar()">Reiniciar</button>
    <button (click)="incrementar(-1)">Restar</button>`
})
export class CounterComponent {
    counter: number = 10;

    incrementar(value: number): void {
      this.counter += value;
    }
  
    reiniciar(): void {
      this.counter = 10;
    }
}