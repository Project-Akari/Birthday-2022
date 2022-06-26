import { LAppDelegate } from '@l2d-setup/lappdelegate';
import * as L2dDefine from '@l2d-setup/lappdefine';
import { PuroSekaiChar } from '@l2d-setup/lappdefine';

interface ModelMotionArgs {
  index?: number,
  character: PuroSekaiChar,
  motion: string,
  expression: string,
  triggeredText?: string
}

export class ModelMotion {
  private _index: number;
  private _character: PuroSekaiChar
  private _motion: string;
  private _expression: string;
  private _triggeredText: string;
  private _l2dDelegate: LAppDelegate;

  public get hasTriggeredText() : boolean {
    return this._triggeredText != null;
  }

  public get triggeredText() : string {
    return this._triggeredText;
  }


  constructor({index, character, motion, expression, triggeredText}: ModelMotionArgs) {
    this._index = index;
    this._character = character;
    this._motion = motion;
    this._expression = expression;
    this._triggeredText = triggeredText;
    this._l2dDelegate = LAppDelegate.getInstance();
  }

  public run(currentDialog?: string): void {
    if (this.hasTriggeredText && currentDialog) {
      if (currentDialog.includes(this._triggeredText)) this._runMotion()
    }
    else this._runMotion();
  }

  private _runMotion(): void {
    this._l2dDelegate.changeMotion(this._expression, this._index ?? this._character, L2dDefine.PriorityForce);
    this._l2dDelegate.changeMotion(this._motion, this._index ?? this._character, L2dDefine.PriorityForce);
  }
}
