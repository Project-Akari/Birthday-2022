import { ModelMotion } from './model_motion';

interface DialogModelParam {
  page: number, characterName: string, dialog: string, modelMotion?: ModelMotion[]
}

export class DialogModel {
  public characterName: string;
  public currentDialog: string = "";
  private _motion: ModelMotion[];
  private _page: number;
  private _dialogArray: string[];
  private _dialogString: string;
  private _isMotionRunning: boolean = false;

  public get length() : number {
    return this._dialogArray.length;
  }

  public get fullDialog() : string {
    return this._dialogString;
  }

  public get page() : number {
    return this._page;
  }

  public get motionLength() : number {
    return this._motion.length;
  }



  constructor({page, characterName, dialog, modelMotion}: DialogModelParam ) {
    this._page = page;
    this.characterName = characterName;
    this._dialogArray = Array.from(dialog);
    this._dialogString = dialog;
    this._motion = modelMotion;
  }

  public getDialogChar(index: number): string {
    return this._dialogArray[index];
  }

  public runMotion(index?: number): void {
    if (this._motion.length && this._motion.length > 0) {
      if (index) this._motion[index].run();
      else {
        const initMotions = this._motion.filter(f => !f.hasTriggeredText);
        initMotions.forEach(f => f.run());
      }
    }
  }

  public dialogOnChange(): void {
    if (this._motion.filter(f => f.hasTriggeredText).length > 0) {
      const motions = this._motion.filter(f => this.currentDialog.includes(f.triggeredText));
      if (motions.length > 0) {
        if (!this._isMotionRunning) {
          this._isMotionRunning = true;
          motions[0].run();
        }
      }
    }
  }
}
