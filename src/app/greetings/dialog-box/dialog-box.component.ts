import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DialogModel } from './models/dialog';
import { LAppDelegate } from '@l2d-setup/lappdelegate';
import { IGreetings } from '../greetings-dialog/greetings';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit, OnChanges {
  public dialog: DialogModel;
  public isShowModal = false;
  private _isDialogCompleted = false;
  private _timeouts = [];
  private _page = 1;

  @Input() greeting: IGreetings;
  @Input() modelLoaded: number;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dialog && this.dialog.hasChangeModels) {
      if (changes['modelLoaded'].currentValue == this.dialog.changeModelLength) {
        this.dialog.runMotion();
      }
    }
  }

  ngOnInit(): void {
    this.dialog = this.greeting.getDialog(this._page++);
    this.startDialog();
  }

  _showModal(isShow: boolean): void {
    this.isShowModal = isShow;
  }

  startDialog(): void {
    if (this._isDialogCompleted) this._isDialogCompleted = false;
    if (!this.dialog.hasChangeModels) this.dialog.runMotion();
    for (let index = 0; index < this.dialog.length; index++) {
      this._timeouts.push(setTimeout(() => {
        this.dialog.currentDialog += this.dialog.getDialogChar(index);
        this.dialog.dialogOnChange();
        if ((this.dialog.length - 1) == index) {
          setTimeout(() => {
            if (this.dialog.hasModalContents) this._showModal(true);
          }, 1300);
          this._isDialogCompleted = true;
        }
      }, 20 * index));
    }
  }

  dialogOnClick(): void {
    if (!this._isDialogCompleted) {
      while (this._timeouts.length) {
        clearTimeout(this._timeouts.pop());
      }

      const motionLength = this.dialog.motionLength;
      if (motionLength > 0) {
        this.dialog.runMotion(motionLength - 1);
      }
      this._isDialogCompleted = true
      this.dialog.currentDialog = this.dialog.fullDialog;
      setTimeout(() => {
        if (this.dialog.hasModalContents) this._showModal(true);
      }, 1300);
    }
    else {
      this.dialog = this.greeting.getDialog(this._page++);
      this.dialog.updateModels();
      if (this.dialog) this.startDialog();
    }
  }

  modalOnClose(): void {
    this._showModal(false);
  }
}
