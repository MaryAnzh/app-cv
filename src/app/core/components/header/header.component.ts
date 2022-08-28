import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isRu: boolean = false;
  isEn: boolean = true;

  constructor(
    private _translate: TranslateService,
  ) {
    _translate.addLangs(['en', 'ru']);
    _translate.setDefaultLang('en');
   }

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
    this._translate.use(lang);
  }

}
