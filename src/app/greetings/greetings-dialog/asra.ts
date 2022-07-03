import { KanadeModel } from "@l2d-setup/Resources/characters/kanade/kanade_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModalContent } from "../dialog-box/models/modal_content";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class AsraGreeting implements IGreetings {
  static greetingId = "asra";
  greetingId: string = AsraGreeting.greetingId;
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
      characterName: KanadeModel.portName,
      dialog: `Happy birthday, Akarin! Sana nagustuhan mo yung skin na ginawa ko sa OC mo hehe 🙂 nag-improvise nako,
      shoulder bust lang yon eh :PepeLaugh:`,
      changeModels: [KanadeModel.character],
      modelMotion: [
        new ModelMotion({
          character: KanadeModel.character,
          motion: KanadeModel.motions.normalNod5,
          expression: KanadeModel.expressions.normal2
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 2,
      characterName: KanadeModel.portName,
      dialog: `I hope you enjoy your day to the fullest, and more birthdays to come!`,
      modelMotion: [
        new ModelMotion({
          character: KanadeModel.character,
          motion: KanadeModel.motions.cuteGlad5,
          expression: KanadeModel.expressions.smile5
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Asra',
          isPortrait: true,
          link: 'assets/img/greetings/asra/oc.png'
        }),
        new ModalContent({
          title: 'Asra',
          isPortrait: true,
          link: 'assets/img/greetings/asra/oc2.png'
        }),
        new ModalContent({
          title: 'Asra',
          isPortrait: true,
          link: 'assets/img/greetings/asra/oc3.png'
        }),
        new ModalContent({
          title: 'Asra',
          isPortrait: true,
          link: 'assets/img/greetings/asra/oc4.png'
        }),
      ]
    }));
  }
}
