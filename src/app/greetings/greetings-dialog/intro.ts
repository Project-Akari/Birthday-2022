import { EnaModel } from "@l2d-setup/Resources/characters/ena/ena_model";
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
      dialog: `By the way, Honami told me the other day that she's was about to cry when she didn't get my card. Fufu`,
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
  }
}
