import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SekaiGroup, SekaiGroups } from './models/purosekai-group.';
import { Carousel } from 'bootstrap'

declare var PxLoader;

@Component({
  selector: 'app-assets-loader',
  templateUrl: './assets-loader.component.html',
  styleUrls: ['./assets-loader.component.css']
})
export class AssetsLoaderComponent implements OnInit {
  showLoadingScreen = true;
  groups: SekaiGroup[] = SekaiGroups.groups;
  group: SekaiGroup;
  _selectedGroupIndex: number = 0;
  _carousel: Carousel;
  _isCarouselCompleted: boolean = true;
  progress: number = 0;

  @Input() loadLandingPage: boolean;
  @Input() loadGreetings: boolean;
  @Input() loadCharacters: boolean;
  @Output() onCompleted = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
    this._initAssetLoader();
    this.group = this.groups[this._selectedGroupIndex];
  }

  public onPrev(): void {
    if (this._isCarouselCompleted) {
      this._isCarouselCompleted = false;
      this._carousel.prev();
      setTimeout(() => {
        let index = --this._selectedGroupIndex;
        this._selectedGroupIndex = index == -1 ? (this.groups.length - 1) : index;
        this.group = this.groups[this._selectedGroupIndex];
        this._updateGroupMessageClass();
      }, 500);
    }
  }

  public onNext(): void {
    if (this._isCarouselCompleted) {
      this._isCarouselCompleted = false;
      this._carousel.next();
      setTimeout(() => {
        let index = ++this._selectedGroupIndex;
        this._selectedGroupIndex = index == this.groups.length ? 0 : index;
        this.group = this.groups[this._selectedGroupIndex];
        this._updateGroupMessageClass();
      }, 500);
    }
  }

  private _updateGroupMessageClass(): void {
    const groupMessage = document.getElementById('groupMessageId');
    if (this._selectedGroupIndex == 0) groupMessage.classList.add('virtual');
        if (this._selectedGroupIndex == 1) {
          groupMessage.classList.remove('virtual');
          groupMessage.classList.remove('mmj');
        }
        if (this._selectedGroupIndex == 2) groupMessage.classList.add('mmj');
        if (this._selectedGroupIndex == 3) {
          groupMessage.classList.remove('mmj');
          groupMessage.classList.remove('wxs');
        };
        if (this._selectedGroupIndex == 4) groupMessage.classList.add('wxs');
        if (this._selectedGroupIndex == 5) {
          groupMessage.classList.remove('wxs');
          groupMessage.classList.remove('virtual');
        }
  }

  private _initAssetLoader(): void {
    var loader = new PxLoader();
    this.groups.forEach(value => {
      loader.addImage(value.logoUrl);
      loader.addImage(value.groupImage);
    });

    loader.addCompletionListener(() => {
      this.showLoadingScreen = false;
      setTimeout(() => {
       this._initCarousel();
       console.log(this.loadLandingPage);
       console.log(this.loadGreetings);
       if (this.loadLandingPage) this._initLandingPageAssets();
       if (this.loadGreetings) this._initGreetingsAssets();
       if (this.loadCharacters) this._initCharactersAssets();
      }, 500);
    });

    loader.start();
  }

  private _initLandingPageAssets(): void {
    const length = 3;
    let completed = 0;
    var progressBar = document.getElementById('loadingbarprog');
    var loader = new PxLoader();
    loader.addImage('assets/logo/port_cafe.png');
    loader.addImage('assets/logo/project_akari.png');
    loader.addVideo('assets/videos/login_video.mp4');

    loader.addProgressListener((e) => {
      this.progress = ((++completed/length) * 100) - 2;
      progressBar.style.width = `${this.progress}%`;
    });

    loader.addCompletionListener(() => {
      setTimeout(() => {
        this.onCompleted.emit();
      }, 3000);
    });

    loader.start();
  }

  private _initGreetingsAssets(): void {
    const length = 22;
    let completed = 0;
    var progressBar = document.getElementById('loadingbarprog');
    var loader = new PxLoader();
    loader.addImage('assets/img/background/classroom.jpg');
    loader.addImage('assets/img/greetings/asra/oc.png');
    loader.addImage('assets/img/greetings/asra/oc2.png');
    loader.addImage('assets/img/greetings/asra/oc3.png');
    loader.addImage('assets/img/greetings/asra/oc4.png');
    loader.addImage('assets/img/greetings/doru/greeting.jpg');
    loader.addImage('assets/img/greetings/jikan/genshin.png');
    loader.addImage('assets/img/greetings/juicy/art.png');
    loader.addImage('assets/img/greetings/juicy/greeting.png');
    loader.addImage('assets/img/greetings/sham/art.png');
    loader.addImage('assets/l2d-setup/Resources/03honami/03honami_normal.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/06haruka/06haruka_normal.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/08shizuku/08shizuku_normal.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/10an/10an_normal.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/11akito/11akito_normal.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/12touya/12touya_normal.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/13tsukasa/13tsukasa_normal.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/17kanade/17kanade_cloth001.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/18mafuyu/18mafuyu_normal.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/19ena/19ena_normal.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/24luka/24luka_band.2048/texture_00.png');
    loader.addImage('assets/l2d-setup/Resources/26kaito/26kaito_street.2048/texture_00.png');

    loader.addProgressListener((e) => {
      this.progress = ((++completed/length) * 100) - 2;
      progressBar.style.width = `${this.progress}%`;
    });

    loader.addCompletionListener(() => {
      setTimeout(() => {
        this.onCompleted.emit();
      }, 3000);
    });

    loader.start();
  }

  private _initCharactersAssets(): void {
    const length = 17;
    let completed = 0;
    var progressBar = document.getElementById('loadingbarprog');
    var loader = new PxLoader();
    loader.addImage('assets/img/background/virtual-singer.png');
    loader.addImage('assets/img/background/leo-need.png');
    loader.addImage('assets/img/background/more-more-jump.png');
    loader.addImage('assets/img/background/vivid.png');
    loader.addImage('assets/img/background/WxS.png');
    loader.addImage('assets/img/background/n25.png');
    loader.addImage('assets/img/characters/Arya.png');
    loader.addImage('assets/img/characters/Asra.png');
    loader.addImage('assets/img/characters/Bene.png');
    loader.addImage('assets/img/characters/Doru.png');
    loader.addImage('assets/img/characters/EmmaKun.png');
    loader.addImage('assets/img/characters/Jikan.png');
    loader.addImage('assets/img/characters/Jikan2.png');
    loader.addImage('assets/img/characters/Juicy.png');
    loader.addImage('assets/img/characters/Sham.png');
    loader.addImage('assets/img/characters/Sky.png');
    loader.addImage('assets/img/characters/Yuyan.png');

    loader.addProgressListener((e) => {
      this.progress = ((++completed/length) * 100) - 2;
      progressBar.style.width = `${this.progress}%`;
    });

    loader.addCompletionListener(() => {
      setTimeout(() => {
        this.onCompleted.emit();
      }, 3000);
    });

    loader.start();
  }

  private _initCarousel(): void {
    const carousel = document.getElementById('carouselGroup')
    this._carousel = new Carousel(carousel, {
      ride: false,
      interval: false
    });
    carousel.addEventListener('slid.bs.carousel', _ => {
      this._carousel.pause();
      this._isCarouselCompleted = true;
    })
  }
}
