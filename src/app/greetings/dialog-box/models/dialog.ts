import { LAppDelegate } from '@l2d-setup/lappdelegate';
import { ModalContent } from './modal_content';
import { ModelMotion } from './model_motion';

interface DialogModelParam {
  page: number,
  characterName: string,
  dialog: string,
  modelMotion?: ModelMotion[],
  changeModels?: number[];
  modalContent?: ModalContent[]
}

export class DialogModel {
  public characterName: string;
  public currentDialog: string = "";
  private _motion: ModelMotion[];
  private _page: number;
  private _dialogArray: string[];
  private _dialogString: string;
  // private _isMotionRunning: boolean = false;
  private _changeModels: number[];
  private _modalContent: ModalContent[]

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

  public get hasChangeModels() : boolean {
    return this._changeModels != null && this._changeModels.length > 0;
  }

  public get hasModalContents() : boolean {
    return this._modalContent != null;
  }


  public get changeModelLength() : number {
    return this._changeModels ? this._changeModels.length : 0;
  }



  constructor({page, characterName, dialog, modelMotion, changeModels, modalContent}: DialogModelParam ) {
    this._page = page;
    this.characterName = characterName;
    this._dialogArray = Array.from(dialog);
    this._dialogString = dialog;
    this._motion = modelMotion;
    this._changeModels = changeModels;
    this._modalContent = modalContent;
  }

  public getDialogChar(index: number): string {
    return this._dialogArray[index];
  }

  public getModalContents() : ModalContent[] {
    return this._modalContent;
  }

  public runMotion(index?: number): void {
    if (this._motion && this._motion.length > 0) {
      if (index) this._motion[index].run();
      else {
        const initMotions = this._motion.filter(f => !f.hasTriggeredText);
        initMotions.forEach(f => f.run());
      }
    }
  }

  public updateModels(): void {
    if (this.hasChangeModels) {
      const l2dDelegate = LAppDelegate.getInstance();
      l2dDelegate.releaseModels();
      this._changeModels.forEach(index => {
        l2dDelegate.loadModel(index);
      })
    }
  }

  public dialogOnChange(): void {
    if (this._motion && this._motion.filter(f => f.hasTriggeredText).length > 0) {
      const motions = this._motion.filter(f => this.currentDialog.includes(f.triggeredText));
      if (motions.length > 0) {
        for (let index = 0; index < motions.length; index++) {
          // if (!this._isMotionRunning) {
          //   this._isMotionRunning = true;
          // }
          motions[index].run();
        }
      }
    }
  }
}
