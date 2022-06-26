import { Component, OnInit, Input } from '@angular/core';
import { CrytptoListItem } from 'src/app/shared/models/crypto.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() coinList: CrytptoListItem[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
