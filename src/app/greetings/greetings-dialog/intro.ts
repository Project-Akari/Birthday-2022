import { AkitoModel } from "@l2d-setup/Resources/characters/akito/akito_model";
import { AnModel } from "@l2d-setup/Resources/characters/an/an_model";
import { EnaModel } from "@l2d-setup/Resources/characters/ena/ena_model";
import { HarukaModel } from "@l2d-setup/Resources/characters/haruka/haruka_model";
import { HonamiModel } from "@l2d-setup/Resources/characters/honami/honami_model";
import { KaitoModel } from "@l2d-setup/Resources/characters/kaito/kaito_model";
import { KanadeModel } from "@l2d-setup/Resources/characters/kanade/kanade_model";
import { LukaModel } from "@l2d-setup/Resources/characters/luka/luka_model";
import { MafuyuModel } from "@l2d-setup/Resources/characters/mafuyu/mafuyu_model";
import { TouyaModel } from "@l2d-setup/Resources/characters/touya/touya_model";
import { TsukasaModel } from "@l2d-setup/Resources/characters/tsukasa/tsukasa_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModalContent } from "../dialog-box/models/modal_content";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class IntroGreeting implements IGreetings {
  dialogs: DialogModel[] = [];
  greetingId: string = "intro";

  constructor() {
    this._initDialog();
  }

  getDialog(page: number): DialogModel {
    return this.dialogs.filter(f => f.page == page)[0];
  }

  private _initDialog(): void {
    this.dialogs.push(new DialogModel({
      page: 1,
      characterName: "Everyone",
      dialog: `Happy Birthday Akari!!!`,
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: EnaModel.character,
          motion: EnaModel.motions.adultGlad1,
          expression: EnaModel.expressions.smile1
        }),
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.coolPoseNod1,
          expression: LukaModel.expressions.smile1
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.coolPoseNod3,
          expression: MafuyuModel.expressions.smile1
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 2,
      characterName: EnaModel.characterName,
      dialog: `It's our first time celebrating Akari's birthday together.`,
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: EnaModel.character,
          motion: EnaModel.motions.adultTilthead1,
          expression: EnaModel.expressions.smile5
        }),
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.adultNod3,
          expression: LukaModel.expressions.sparkling
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.adultNod1,
          expression: MafuyuModel.expressions.smile3
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 3,
      characterName: LukaModel.characterName,
      dialog: `Yeah, It's kind of sad that we didn't met Akari back then.`,
      modelMotion: [
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.adultTilthead2,
          expression: LukaModel.expressions.sad2
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 4,
      characterName: MafuyuModel.characterName,
      dialog: `By the way, Honami told me the other day that she was about to cry when she didn't get my card. Fufu`,
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: EnaModel.character,
          motion: EnaModel.motions.cuteSmug1,
          expression: EnaModel.expressions.smile8
        }),
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.happyForward1,
          expression: LukaModel.expressions.darkSmile1
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.happyPoseNode3,
          expression: MafuyuModel.expressions.darkSmile2
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 5,
      characterName: MafuyuModel.characterName,
      dialog: `I hope you will get my card on your birthday. Why don't you
        try to pull right now Akari? Hehehe`,
      modelMotion: [
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.cutePoseTilthead4,
          expression: MafuyuModel.expressions.smile4
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.cuteShakehead3,
          expression: MafuyuModel.expressions.smile5,
          triggeredText: 'pull'
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 6,
      characterName: LukaModel.characterName,
      dialog: `Oh. Everyone is here!`,
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: EnaModel.character,
          motion: EnaModel.motions.coolShakehand1,
          expression: EnaModel.expressions.smile1
        }),
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.happyShakehand1,
          expression: LukaModel.expressions.sparkling
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.cuteShakehand1,
          expression: MafuyuModel.expressions.shy2
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 7,
      characterName: "Everyone",
      dialog: `Happy Birthday Akari!!`,
      changeModels: [HarukaModel.character, AnModel.character, HonamiModel.character],
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: HarukaModel.character,
          motion: HarukaModel.motions.coolBlushed1,
          expression: HarukaModel.expressions.sparkling
        }),
        new ModelMotion({
          index: 1,
          character: AnModel.character,
          motion: AnModel.motions.happyForward2,
          expression: AnModel.expressions.sparkling
        }),
        new ModelMotion({
          index: 2,
          character: HonamiModel.character,
          motion: HonamiModel.motions.happyGlad1,
          expression: HonamiModel.expressions.sparkling
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 8,
      characterName: "Everyone",
      dialog: `Happy Birthday Akari!!`,
      changeModels: [AkitoModel.character, TouyaModel.character, TsukasaModel.character],
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: AkitoModel.character,
          motion: AkitoModel.motions.adultTilthead0304,
          expression: AkitoModel.expressions.smile1
        }),
        new ModelMotion({
          index: 1,
          character: TouyaModel.character,
          motion: TouyaModel.motions.adultTilthead1,
          expression: TouyaModel.expressions.smile1
        }),
        new ModelMotion({
          index: 2,
          character: TsukasaModel.character,
          motion: TsukasaModel.motions.adultTilthead2,
          expression: TsukasaModel.expressions.smile2
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 9,
      characterName: "Everyone",
      dialog: `Happy Birthday Akari!!`,
      changeModels: [KanadeModel.character, KaitoModel.character],
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: KanadeModel.character,
          motion: KanadeModel.motions.animalTiltheadNod0101,
          expression: KanadeModel.expressions.smile1
        }),
        new ModelMotion({
          index: 1,
          character: KaitoModel.character,
          motion: KaitoModel.motions.adultTilthead1,
          expression: KaitoModel.expressions.smile2
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 10,
      characterName: LukaModel.characterName,
      dialog: `Since everyone is here, why don't we read our greetings to
        Akari? then I will start first.`,
      changeModels: [LukaModel.character],
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: LukaModel.character,
          motion: LukaModel.motions.adultNod3,
          expression: LukaModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 11,
      characterName: LukaModel.characterName,
      dialog: `"Are you enjoying your day so far? Know this, superstar
        A wonderful day still awaits you Right now is a grand moment for you
        I wish you a great day and happy birthday" - Arya`,
      modelMotion: [
        new ModelMotion({
          character: LukaModel.character,
          motion: LukaModel.motions.adultTilthead2,
          expression: LukaModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 12,
      characterName: LukaModel.characterName,
      dialog: `I'm done reading mine. Who's next?`,
      modelMotion: [
        new ModelMotion({
          character: LukaModel.character,
          motion: LukaModel.motions.coolPoseNod1,
          expression: LukaModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 13,
      characterName: KaitoModel.characterName,
      dialog: `Me.`,
      changeModels: [KaitoModel.character],
      modelMotion: [
        new ModelMotion({
          character: KaitoModel.character,
          motion: KaitoModel.motions.normalShakehand1,
          expression: KaitoModel.expressions.smile3
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 14,
      characterName: KaitoModel.characterName,
      dialog: `"Happy Birthday Akariiiiiiiiin. Sana maging happy ang
        araw mo today at wag ka pa stress sa work. Abusuhin ang VL
        if ma pwede gashaahs chz" - Yuyan`,
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
    this.dialogs.push(new DialogModel({
      page: 15,
      characterName: KaitoModel.characterName,
      dialog: `That is all.`,
      modelMotion: [
        new ModelMotion({
          character: KaitoModel.character,
          motion: KaitoModel.motions.adultTilthead1,
          expression: KaitoModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 16,
      characterName: HarukaModel.characterName,
      dialog: `Then I'm next`,
      changeModels: [HarukaModel.character],
      modelMotion: [
        new ModelMotion({
          character: HarukaModel.character,
          motion: HarukaModel.motions.coolBlushed1,
          expression: HarukaModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 17,
      characterName: HarukaModel.characterName,
      dialog: `Happy Birthday Akari. *Shows you a birthday card and
        an art*`,
      modelMotion: [
        new ModelMotion({
          character: HarukaModel.character,
          motion: HarukaModel.motions.cuteFidget1,
          expression: HarukaModel.expressions.shy1
        }),
      ],
      modalContent: [
        new ModalContent({
          isPortrait: true,
          link: 'assets/img/greetings/juicy/greeting.png'
        }),
        new ModalContent({
          isPortrait: false,
          link: 'assets/img/greetings/juicy/art.png'
        })
      ]
    }));
  }
}
