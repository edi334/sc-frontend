import { Injectable } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationStart, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private prefixTitle = 'HealthyLifeWeb';
  private sett = false;

  constructor(private titleService: Title, private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart && this.sett) {
        this.titleService.setTitle(this.prefixTitle);
        this.sett = false;
      }
    });
  }

  public setTitle(title: string): void {
    if (title === '') {
      this.titleService.setTitle(this.prefixTitle);
    } else {
      this.titleService.setTitle(this.prefixTitle + ' - ' + title);
      this.sett = true;
    }
  }
}
