import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YesNoPipe } from '../pipes/yes-no.pipe';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pricetable',
  standalone: true,
  imports: [CommonModule, FormsModule, YesNoPipe],
  templateUrl: './pricetable.component.html',
  styleUrl: './pricetable.component.scss',
})
export class PricetableComponent implements OnInit {
  structure: any;
  data!: Array<any>;

  ngOnInit() {
    this.structure = {
      id: 'number',
      dasaxeleba: 'string',
      raodenoba: 'number',
      fasi: 'numer',
      gadaxdili: 'boolean',
    };
    this.data = [
      {
        id: 1,
        dasaxeleba: 'დესკტოპი',
        raodenoba: 5,
        fasi: 450,
        gadaxdili: true,
      },
      {
        id: 2,
        dasaxeleba: 'ლეპტოპი',
        raodenoba: 51,
        fasi: 250,
        gadaxdili: false,
      },
    ];
  }
}
