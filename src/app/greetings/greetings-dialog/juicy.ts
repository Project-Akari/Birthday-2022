import { HarukaModel } from "@l2d-setup/Resources/characters/haruka/haruka_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModalContent } from "../dialog-box/models/modal_content";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class JuicyGreeting implements IGreetings {
  static greetingId = "juicy";
  greetingId: string = JuicyGreeting.greetingId;
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
      characterName: HarukaModel.portName,
      dialog: `Happy Birthday Akari. *Shows you a birthday card and
        an art*`,
      changeModels: [HarukaModel.character],
      modelMotion: [
        new ModelMotion({
          character: HarukaModel.character,
          motion: HarukaModel.motions.cuteFidget1,
          expression: HarukaModel.expressions.shy1
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Juicy',
          isPortrait: true,
          link: 'assets/img/greetings/juicy/greeting.png'
        }),
        new ModalContent({
          title: 'Juicy',
          isPortrait: false,
          link: 'assets/img/greetings/juicy/art.png'
        })
      ]
    }));
  }
}
