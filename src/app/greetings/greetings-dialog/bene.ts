import { TsukasaModel } from "@l2d-setup/Resources/characters/tsukasa/tsukasa_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModalContent } from "../dialog-box/models/modal_content";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class BeneGreeting implements IGreetings {
  static greetingId = "bene";
  greetingId: string = BeneGreeting.greetingId;
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
      characterName: TsukasaModel.portName,
      dialog: `"Happy birthday AKARIN!!! Hope na makuha mo lahat ng mga gusto mo sa buhay pati si SUI-CHAN XDDDD!
        and MBTC! Greet muna ngayon ha! bawi ako pag di na busy" - Pogi pero Gwapo (Bene)`,
      changeModels: [TsukasaModel.character],
      modelMotion: [
        new ModelMotion({
          character: TsukasaModel.character,
          motion: TsukasaModel.motions.lookup1,
          expression: TsukasaModel.expressions.smile6
        }),
      ],
    }));
  }
}
