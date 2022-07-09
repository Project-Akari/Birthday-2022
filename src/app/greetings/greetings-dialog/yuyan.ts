import { KaitoModel } from "@l2d-setup/Resources/characters/kaito/kaito_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class YuyanGreeting implements IGreetings {
  static greetingId = "yuyan";
  greetingId: string = YuyanGreeting.greetingId;
  dialogs: DialogModel[] = [];

  constructor() {
    this._initDialog();
  }

  getDialog(page: number): DialogModel {
    return this.dialogs.filter(f => f.page == page)[0];
  }

  private _initDialog(): void {
    this.dialogs.push(new DialogModel({
      page: 1,
      characterName: KaitoModel.portName,
      dialog: `Happy Birthday Akariiiiiiiiin. Sana maging happy ang
        araw mo today at wag ka pa stress sa work. Abusuhin ang VL
        if ma pwede gashaahs chz`,
      changeModels: [KaitoModel.character],
      modelMotion: [
        new ModelMotion({
          character: KaitoModel.character,
          motion: KaitoModel.motions.normalSmug1,
          expression: KaitoModel.expressions.smile1
        }),
        new ModelMotion({
          character: KaitoModel.character,
          motion: KaitoModel.motions.adultTilthead1,
          expression: KaitoModel.expressions.smile3,
          triggeredText: 'Abusuhin'
        }),
      ]
    }));
  }
}
