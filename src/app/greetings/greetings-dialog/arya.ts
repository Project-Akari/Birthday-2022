import { LukaModel } from "@l2d-setup/Resources/characters/luka/luka_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModalContent } from "../dialog-box/models/modal_content";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class AryaGreeting implements IGreetings {
  static greetingId = "arya";
  greetingId: string = AryaGreeting.greetingId;
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
      characterName: LukaModel.portName,
      dialog: `Are you enjoying your day so far? Know this, superstar
        A wonderful day still awaits you Right now is a grand moment for you
        I wish you a great day and happy birthday`,
      changeModels: [LukaModel.character],
      modelMotion: [
        new ModelMotion({
          character: LukaModel.character,
          motion: LukaModel.motions.adultTilthead2,
          expression: LukaModel.expressions.smile1
        }),
      ]
    }));
  }
}
