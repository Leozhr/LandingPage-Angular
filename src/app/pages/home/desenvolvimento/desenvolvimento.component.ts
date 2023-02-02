import { Component, OnInit } from '@angular/core';
import { Plasm } from './desenvolvimento';

@Component({
  selector: 'app-desenvolvimento',
  templateUrl: './desenvolvimento.component.html',
  styleUrls: ['./desenvolvimento.component.css'],
})
export class DesenvolvimentoComponent implements OnInit {
  plasm = new Plasm();

  ngOnInit(): void {
    this.plasm.select('.itens-list li');
  }
}
