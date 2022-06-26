import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})
export class CoinDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.route.snapshot.data['title'])
  }

}
