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

  public get length() : number {
    return this._dialogArray.length;
  }

  public get fullDialog() : string {
    return this._dialogString;
  }

  public get page() : number {
    return this._page;
  }


  constructor({page, characterName, dialog, modelMotion}: DialogModelParam ) {
    this._page = page;
    this.characterName = characterName;
    this._dialogArray = Array.from(dialog);
    this._dialogString = dialog;
    this._motion = modelMotion;
  }

  getDialogChar(index: number): string {
    return this._dialogArray[index];
  }

  runModelMotion(): void {
    if (this._motion.length && this._motion.length > 0) {
      this._motion[0].run();
    }
  }
}
