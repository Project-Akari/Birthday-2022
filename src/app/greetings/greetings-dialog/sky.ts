import { TouyaModel } from "@l2d-setup/Resources/characters/touya/touya_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModalContent } from "../dialog-box/models/modal_content";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class SkyGreeting implements IGreetings {
  static greetingId = "sky";
  greetingId: string = SkyGreeting.greetingId;
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
      characterName: TouyaModel.portName,
      dialog: `Happy Birthday Akari! Thanks for being such a good friend.
        Palagi kang nandyan para makinig sa mga problema ko at palagi mo akong sinasamahan sa mga laro. `,
      changeModels: [TouyaModel.character],
      modelMotion: [
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.coolTilthead1,
          expression: TouyaModel.expressions.normal1
        }),
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.adultTilthead0304,
          expression: TouyaModel.expressions.smile1,
          triggeredText: 'Palagi kang'
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 2,
      characterName: TouyaModel.portName,
      dialog: `Thank you kasi palagi mong sinasabayan mga trip ko at mga plans ko katulad nung sa party natin sa Port.
        Wish ko na sana mas alagaan mo na sarili mo.`,
      modelMotion: [
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.coolThink2,
          expression: TouyaModel.expressions.smile3
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 3,
      characterName: TouyaModel.portName,
      dialog: `Nakakabahala kayo palagi sa Port pag may nagkakasakit dahil sa kakapuyat niyo or dahil
        hindi kayo kumakain nang maayos. Wag masyadong matigas ang ulo!`,
      modelMotion: [
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.coolTrouble1,
          expression: TouyaModel.expressions.sad2
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 4,
      characterName: TouyaModel.portName,
      dialog: `Enjoy your day! More birthdays and more games to come. God Bless! Lablab! *Shows you a video*`,
      modelMotion: [
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.adultTilthead1,
          expression: TouyaModel.expressions.smile1
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Sky',
          isPortrait: false,
          isEmbed: true,
          link: 'https://drive.google.com/file/d/15mwpgUyylwdwtIpixTsooU7bKiKvXJ6x/preview'
        })
      ]
    }));
  }
}
