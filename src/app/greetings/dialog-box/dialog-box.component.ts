import { Component, Input, OnInit } from '@angular/core';
import { DialogModel } from './models/dialog';
import { LAppDelegate } from '@l2d-setup/lappdelegate';
import * as L2dDefine from '@l2d-setup/lappdefine';
import { ModelMotion } from './models/model_motion';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  public dialog: DialogModel;
  public
  private _isDialogCompleted = false;
  private _timeouts = [];
  private _l2dDelegate: LAppDelegate;

  constructor() { }

  ngOnInit(): void {
    this._l2dDelegate = LAppDelegate.getInstance()
    this.dialog = new DialogModel({
      page: 1,
      characterName: 'Ena',
      dialog: `"Are you enjoying your day so far? Know this, superstar
        A wonderful day still awaits you
        Right now is a grand moment for you
        I wish you a great day and happy birthday" - Arya`,
        modelMotion: [
          new ModelMotion({
            motion: 'w-adult-glad01',
            expression: 'face_smile_01'
          })
        ]
    });

    this.startDialog();
  }

  startDialog(): void {
    this.dialog.runModelMotion();
    for (let index = 0; index < this.dialog.length; index++) {
      this._timeouts.push(setTimeout(() => {
        this.dialog.currentDialog += this.dialog.getDialogChar(index);
        if ((this.dialog.length - 1) == index) this._isDialogCompleted = true;
      }, 20 * index));
    }
  }

  changeDialog(): void {
    if (!this._isDialogCompleted) {
      while (this._timeouts.length) {
        clearTimeout(this._timeouts.pop());
      }
      this._isDialogCompleted = true
    }
    else {
      this._l2dDelegate.changeMotion('face_smile_05', L2dDefine.PriorityForce);
      this._l2dDelegate.changeMotion('w-cute-delicious02', L2dDefine.PriorityForce);
    }

    this.dialog.currentDialog = this.dialog.fullDialog;
  }
}
