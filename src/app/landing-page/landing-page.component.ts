import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectAkariSettings } from './models/settings';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {
  portCafe = true;
  projectAkari = false;
  loginPage = false;
  isIntroSkipped = false;
  isModalShown = false;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this._initLogos();
  }

  ngOnInit(): void {
    this.isIntroSkipped = ProjectAkariSettings.isIntroSkipped();
  }

  public toggleSkipIntro(): void {
    this.isIntroSkipped = ProjectAkariSettings.toggleIntro();
  }

  public showModal(): void {
    this.isModalShown = true;
  }

  public onModalClose(): void {
    this.isModalShown = false;
  }

  public onLogin(): void {
    if (this.isIntroSkipped) this.router.navigate(['/characters'])
    else  this.router.navigateByUrl('greetings?greetedby=intro');
  }

  private _initLogos(): void {
    const logos = [
      new LogoModel('portCafeLogo', (isShow) => this.portCafe = isShow),
      new LogoModel('projectAkariLogo', (isShow) => this.projectAkari = isShow),
      new LogoModel('loginPage', (isShow) => this.loginPage = isShow)
    ];
    for (let i = 0; i < logos.length; i++) {
      const logo = logos[i];
      if (i < (logos.length - 1)) {
        setTimeout(() => {
          this._fadeOut(logo.name, () => {
            logo.hideLogo();
            logos[i + 1].showLogo();
          });
        }, i == 0 ? 2500 : 6500 * i);
      }
    }
  }

  private _fadeOut(elementId: string, callback: Function) : void {
    var element: HTMLElement = document.getElementById(elementId);
    element.classList.remove("fade-in")
    element.classList.add("fade-out")
    setTimeout(callback, 2000);
  }
}

type LogoVisibilityFunc = (a: boolean) => void;
class LogoModel {
  private _name: string;
  private _logoVisiblity: LogoVisibilityFunc;

  public get name() : string {
    return this._name;
  }


  constructor(name: string, logoVisiblity: LogoVisibilityFunc) {
    this._name = name;
    this._logoVisiblity = logoVisiblity;
  }

  public showLogo(): void {
    this._logoVisiblity(true);
  }

  public hideLogo(): void {
    this._logoVisiblity(false);
  }
}
