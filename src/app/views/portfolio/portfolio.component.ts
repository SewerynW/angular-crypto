import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private route: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.route.snapshot.data['title'])
  }

}
