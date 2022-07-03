import { AnModel } from "@l2d-setup/Resources/characters/an/an_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModalContent } from "../dialog-box/models/modal_content";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class ShamGreeting implements IGreetings {
  static greetingId = "sham";
  greetingId: string = ShamGreeting.greetingId;
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
      characterName: AnModel.portName,
      dialog: `Hallo ate Koharu my project sekai buddy!! Happy happy birthday!!!
        I wuv u!!! Sana ay mag enjoy k sa iyong kaarawan!!!! *Shows you a drawing*`,
      changeModels: [AnModel.character],
      modelMotion: [
        new ModelMotion({
          character: AnModel.character,
          motion: AnModel.motions.coolNodTilthead0102,
          expression: AnModel.expressions.smile5
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Sham',
          isPortrait: true,
          link: 'assets/img/greetings/sham/art.png'
        })
      ]
    }));
  }
}
