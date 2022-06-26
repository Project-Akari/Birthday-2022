import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DialogModel } from './models/dialog';
import { LAppDelegate } from '@l2d-setup/lappdelegate';
import { ModelMotion } from './models/model_motion';
import { EnaModel } from '@l2d-setup/Resources/characters/ena/ena_model';
import { LukaModel } from '@l2d-setup/Resources/characters/luka/luka_model';
import { MafuyuModel } from '@l2d-setup/Resources/characters/mafuyu/mafuyu_model';
import { IGreetings } from '../greetings-dialog/greetings';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit, OnChanges {
  public dialog: DialogModel;
  private _isDialogCompleted = false;
  private _timeouts = [];
  private _page = 1;

  @Input() greeting: IGreetings;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.dialog = this.greeting.getDialog(this._page++);

    this.startDialog();
  }

  startDialog(): void {
    this.dialog.runMotion();
    for (let index = 0; index < this.dialog.length; index++) {
      this._timeouts.push(setTimeout(() => {
        this.dialog.currentDialog += this.dialog.getDialogChar(index);
        this.dialog.dialogOnChange();
        if ((this.dialog.length - 1) == index) this._isDialogCompleted = true;
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
    }
    else {
      this.dialog = this.greeting.getDialog(this._page++);
      this.startDialog();
    }
  }
}
