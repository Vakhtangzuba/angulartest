import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, ChildComponent, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() message: string = '';

  @Output() parentData: EventEmitter<any> = new EventEmitter();

  constructor() {}

  inputValue: any = '';

  sendValueToParent() {
    this.parentData.emit(this.inputValue);
  }
}
