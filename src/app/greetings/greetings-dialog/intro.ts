import { AkitoModel } from "@l2d-setup/Resources/characters/akito/akito_model";
import { AnModel } from "@l2d-setup/Resources/characters/an/an_model";
import { EnaModel } from "@l2d-setup/Resources/characters/ena/ena_model";
import { HarukaModel } from "@l2d-setup/Resources/characters/haruka/haruka_model";
import { LukaModel } from "@l2d-setup/Resources/characters/luka/luka_model";
import { MafuyuModel } from "@l2d-setup/Resources/characters/mafuyu/mafuyu_model";
import { DialogModel } from "../dialog-box/models/dialog";
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
          character: EnaModel.character,
          motion: EnaModel.motions.adultGlad1,
          expression: EnaModel.expressions.smile1
        }),
        new ModelMotion({
          character: LukaModel.character,
          motion: LukaModel.motions.coolPoseNod1,
          expression: LukaModel.expressions.smile1
        }),
        new ModelMotion({
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.coolPoseNod3,
          expression: MafuyuModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 2,
      characterName: EnaModel.characterName,
      dialog: `It's our first time celebrating Akari's birthday together.`,
      modelMotion: [
        new ModelMotion({
          character: EnaModel.character,
          motion: EnaModel.motions.adultTilthead1,
          expression: EnaModel.expressions.smile5
        }),
        new ModelMotion({
          character: LukaModel.character,
          motion: LukaModel.motions.adultNod3,
          expression: LukaModel.expressions.sparkling
        }),
        new ModelMotion({
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
          character: EnaModel.character,
          motion: EnaModel.motions.cuteSmug1,
          expression: EnaModel.expressions.smile8
        }),
        new ModelMotion({
          character: LukaModel.character,
          motion: LukaModel.motions.happyForward1,
          expression: LukaModel.expressions.darkSmile1
        }),
        new ModelMotion({
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
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.cutePoseTilthead4,
          expression: MafuyuModel.expressions.smile4
        }),
        new ModelMotion({
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
          character: EnaModel.character,
          motion: EnaModel.motions.coolShakehand1,
          expression: EnaModel.expressions.smile1
        }),
        new ModelMotion({
          character: LukaModel.character,
          motion: LukaModel.motions.happyShakehand1,
          expression: LukaModel.expressions.sparkling
        }),
        new ModelMotion({
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
      changeModels: [HarukaModel.character, AnModel.character, AkitoModel.character],
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
          character: AkitoModel.character,
          motion: AkitoModel.motions.adultTilthead0304,
          expression: AkitoModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 8,
      characterName: "Everyone",
      dialog: `Happy Birthday Akari!!`,
      changeModels: [6, 7, 8]
    }));
    this.dialogs.push(new DialogModel({
      page: 9,
      characterName: "Kaito",
      dialog: `Happy Birthday Akari!!`,
      changeModels: [9]
    }));
  }
}
