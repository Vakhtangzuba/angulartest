import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { PricetableComponent } from '../pricetable/pricetable.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent, FormsModule, PricetableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements OnInit {
  movieList = [
    { id: 1, name: 'LOTR 1', value: 'LOTR 1' },
    { id: 2, name: 'LOTR 2', value: 'LOTR 2' },
    { id: 3, name: 'LOTR 3', value: 'LOTR 3' },
  ];

  defaultMovie: any = '';
  mymessage: any = '';

  //From Child element (Data)
  parentData(data: any) {
    const findState = this.movieList.find((item) => {
      return item.id == data;
    });
    this.mymessage = findState?.name;
    this.defaultMovie = findState?.id;
  }

  constructor() {}

  ngOnInit(): void {}

  getData(event: any) {
    this.mymessage = event.target.value;
  }
}
