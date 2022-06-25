import { LAppDelegate } from '@l2d-setup/lappdelegate';
import * as L2dDefine from '@l2d-setup/lappdefine';

export class ModelMotion {
  public _motion: string;
  public _expression: string;

  constructor({motion, expression}: {motion: string, expression: string}) {
    this._motion = motion;
    this._expression = expression;
  }

  public run(): void {
    const l2dDelegate = LAppDelegate.getInstance();
    l2dDelegate.changeMotion(this._expression, L2dDefine.PriorityForce);
    l2dDelegate.changeMotion(this._motion, L2dDefine.PriorityForce);
  }
}
