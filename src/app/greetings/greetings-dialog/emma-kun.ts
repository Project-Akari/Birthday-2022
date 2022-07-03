import { HonamiModel } from "@l2d-setup/Resources/characters/honami/honami_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class EmmaKunGreeting implements IGreetings {
  static greetingId = "emmakun";
  greetingId: string = EmmaKunGreeting.greetingId;
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
      characterName: HonamiModel.portName,
      dialog: `Happy Birthday Akari!!! Sana ay masaya ka sa birthday mo. Pasensya kung kulang2x features
        ng Project Akari: Birthday Stage! HAHAHA Ito lang nakayanan ni Emma xD.`,
      changeModels: [HonamiModel.character],
      modelMotion: [
        new ModelMotion({
          character: HonamiModel.character,
          motion: HonamiModel.motions.cuteGlad1,
          expression: HonamiModel.expressions.smile2
        }),
        new ModelMotion({
          character: HonamiModel.character,
          motion: HonamiModel.motions.cuteShy1,
          expression: HonamiModel.expressions.smile1,
          triggeredText: 'Stage!'
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 2,
      characterName: HonamiModel.portName,
      dialog: `Sana ay makuha mo mga gusto mo sa buhay at si Ena Hihihi. Stay Healthy ka palagi kung hindi
        matatalo na kita sa project sekai at kukunin ko trono mo xD`,
      modelMotion: [
        new ModelMotion({
          character: HonamiModel.character,
          motion: HonamiModel.motions.cutePoseNod1,
          expression: HonamiModel.expressions.sparkling
        }),
        new ModelMotion({
          character: HonamiModel.character,
          motion: HonamiModel.motions.cuteSmug1,
          expression: HonamiModel.expressions.sparkling,
          triggeredText: 'matatalo'
        }),
      ],
    }));
  }
}
