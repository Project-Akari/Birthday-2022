import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalContent } from '../greetings/dialog-box/models/modal_content';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges {
  public hasModalContents: boolean = false;
  public hidePrevBtn: boolean = true;
  public hideNextBtn: boolean = false;
  private _elements: HTMLElement[] = []
  private _currentIndex: number = 0;

  @Input() modalContents: ModalContent[] = []
  @Input() onPrev: () => void;
  @Input() onNext: () => void;
  constructor() { }

  ngOnInit(): void {
    this.hasModalContents = true;
    console.log('onInit = ' + this.modalContents.length)
    this._renderContents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['modalContents'].currentValue.length != this.modalContents.length) {
      this.modalContents = changes['modalContents'].currentValue;
      this.hasModalContents = true;
      console.log('onChanges = ' + this.modalContents.length)
      this._renderContents();
    }
  }

  private _renderContents() {
    this._currentIndex = 0;
    this._elements = [];
    this.hideNextBtn = this.modalContents.length == 1;
    setTimeout(() => {
      const parentElement = document.getElementById('modalContentElem');
      this.modalContents.forEach((content, index) => {
        if (content.isImage) this._elements.push(content.buildImage(parentElement, index != 0));
        else if (content.isEmbed) this._elements.push(content.buildEmbed(parentElement, index != 0));
      });
    }, 500);
  }

  private _changeContainerOrient(isPortrait: boolean) {
    const containerElem = document.getElementById('modalContainerId');
    const containerClassList = containerElem.classList;
    const containsPortrait = containerClassList.contains('portrait');
    if (containsPortrait && !isPortrait) containerClassList.remove('portrait');
    else if (isPortrait) containerClassList.add('portrait');
  }

  public modalOnPrev(): void {
    this._elements[this._currentIndex--].style.display = 'none';
    this._changeContainerOrient(this.modalContents[this._currentIndex].isPortrait);
    this._elements[this._currentIndex].style.display = 'block';
    this.hidePrevBtn = this._currentIndex == 0 ;
    this.hideNextBtn = false ;
    if (this.onPrev) this.onPrev();
  }

  public modalOnNext(): void {
    this._elements[this._currentIndex++].style.display = 'none';
    this._changeContainerOrient(this.modalContents[this._currentIndex].isPortrait);
    this._elements[this._currentIndex].style.display = 'block';
    this.hidePrevBtn = this._currentIndex == 0 ;
    this.hideNextBtn = this.modalContents.length == (this._currentIndex + 1) ;
    if (this.onNext) this.onNext();
  }
}
