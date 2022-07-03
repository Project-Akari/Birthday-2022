import { ShizukuModel } from "@l2d-setup/Resources/characters/shizuku/shizuku_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModalContent } from "../dialog-box/models/modal_content";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

// import { DialogModel } from "../dialog-box/models/dialog";
// import { ModalContent } from "../dialog-box/models/modal_content";
// import { ModelMotion } from "../dialog-box/models/model_motion";
// import { IGreetings } from "./greetings";

// export class JikanGreeting implements IGreetings {
//   static greetingId = "jikan";
//   greetingId: string = JikanGreeting.greetingId;
//   dialogs: DialogModel[] = [];

//   constructor() {
//     this._initDialog();
//   }

//   getDialog(page: number): DialogModel {
//     return this.dialogs.filter(f => f.page == page)[0];
//   }

//   private _initDialog(): void {

//   }
// }

export class JikanGreeting implements IGreetings {
  static greetingId = "jikan";
  greetingId: string = JikanGreeting.greetingId;
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
      characterName: ShizukuModel.portName,
      dialog: `Happy birthday Akarin!! Sana ay mabuhay ka pa nang matagal and enjoy your life to the fullest!
       alam kong super bait mo kaya you deserve all the good things in life and`,
      changeModels: [ShizukuModel.character],
      modelMotion: [
        new ModelMotion({
          character: ShizukuModel.character,
          motion: ShizukuModel.motions.happyTilthead1,
          expression: ShizukuModel.expressions.smile1
        }),
        new ModelMotion({
          character: ShizukuModel.character,
          motion: ShizukuModel.motions.coolTilthead2,
          expression: ShizukuModel.expressions.smile1,
          triggeredText: 'alam kong'
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 2,
      characterName: ShizukuModel.portName,
      dialog: `hope that never a bad day approach you though it's impossible but I hope the world will be always gentle to you.`,
      modelMotion: [
        new ModelMotion({
          character: ShizukuModel.character,
          motion: ShizukuModel.motions.adultNod3,
          expression: ShizukuModel.expressions.smile5
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 3,
      characterName: ShizukuModel.portName,
      dialog: ` Enjoy your day and always take care of yourself <3 I love you! And always know you have me
        and Port Café always. *Shows you a picture of both of you together and a cover song*`,
      modelMotion: [
        new ModelMotion({
          character: ShizukuModel.character,
          motion: ShizukuModel.motions.adultBlushed3,
          expression: ShizukuModel.expressions.sparkling1
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Jikan',
          isPortrait: false,
          link: 'assets/img/greetings/jikan/genshin.png'
        }),
        new ModalContent({
          title: 'Jikan',
          isPortrait: false,
          isEmbed: true,
          link: 'https://drive.google.com/file/d/1-H6liL_fORi_ZxZ0NT9IqpFv7ZcOGvRk/preview'
        })
      ]
    }));
  }
}
