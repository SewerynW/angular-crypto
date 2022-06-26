import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { CrytptoListItem } from 'src/app/shared/models/crypto.model';
import { CryptoService } from 'src/app/services/crypto.service';
import { Observable, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription()
  search: string = ''
  cryptoList: CrytptoListItem[] = []

  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.title.setTitle(this.route.snapshot.data['title'])

    this.setupDate()
    this.getCrypto()

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  getCrypto(): void {
    const sub = this.cryptoService.getCurrency$().subscribe(date => this.cryptoList = date)

    this.subscriptions.add(sub)
  }

  setupDate(): void {
    // const date = new Date() 
  }

}
