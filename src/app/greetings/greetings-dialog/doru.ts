import { AkitoModel } from "@l2d-setup/Resources/characters/akito/akito_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModalContent } from "../dialog-box/models/modal_content";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class DoruGreeting implements IGreetings {
  static greetingId = "doru";
  greetingId: string = DoruGreeting.greetingId;
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
      characterName: AkitoModel.portName,
      dialog: `Happy Birthday Akarin! *Shows you a picture message*`,
      changeModels: [AkitoModel.character],
      modelMotion: [
        new ModelMotion({
          character: AkitoModel.character,
          motion: AkitoModel.motions.adultTilthead0304,
          expression: AkitoModel.expressions.smile1
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Doru',
          isPortrait: false,
          link: 'assets/img/greetings/doru/greeting.jpg'
        })
      ]
    }));
  }
}
