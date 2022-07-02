interface ModelContentArgs {
  title: string;
  isImage?: boolean;
  isEmbed?: boolean;
  isPortrait: boolean;
  link: string;
}

export class ModalContent {
    private _isImage?: boolean;
    private _isEmbed?: boolean;
    private _isPortrait: boolean;
    private _link: string;
    private _modalTitle: string;


    public get title() : string {
      return this._modalTitle;
    }

    public get isImage() : boolean {
      return this._isImage;
    }

    public get isEmbed() : boolean {
      return this._isEmbed;
    }

    public get isPortrait() : boolean {
      return this._isPortrait;
    }

    public get link() : string {
      return this._link;
    }



    constructor({title, isImage = true, isEmbed = false, isPortrait, link}: ModelContentArgs) {
      this._modalTitle = title;
      this._isImage = isImage && !isEmbed;
      this._isEmbed = isEmbed;
      this._isPortrait = isPortrait;
      this._link = link;
    }

    buildEmbed(parentElement: HTMLElement, isHide: boolean = true): HTMLIFrameElement {
      const Iframe = document.createElement('iframe');
      Iframe.src = this.link;
      if (isHide) Iframe.style.display = 'none';
      parentElement.append(Iframe);
      return Iframe;
    }

    buildImage(parentElement: HTMLElement, isHide: boolean = true): HTMLImageElement {
      const imageElement = document.createElement('img');
      imageElement.src = this.link;
      if (isHide) imageElement.style.display = 'none';
      parentElement.append(imageElement);
      return imageElement;
    }
}
