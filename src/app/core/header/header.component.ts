import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isRu: boolean = false;
  isEn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguageOnClick(lang: string): void {
    if (lang === 'ru') {
      this.isRu = true;
      this.isEn = false;
    } else {
      this.isRu = false;
      this.isEn = true;
    }
  }

}
