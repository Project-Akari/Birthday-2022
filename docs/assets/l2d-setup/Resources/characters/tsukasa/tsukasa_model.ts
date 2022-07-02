import { TsukasaExpressions } from "./tsukasa_expressions";
import { TsukasaMotions } from "./tsukasa_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class TsukasaModel {
  public static characterName = "Tsukasa";
  public static portName = `${this.characterName} (Bene)`;
  public static character: PuroSekaiChar = PuroSekaiChar.Tsukasa;
  public static directoryIndex = this.character;
  public static motions = new TsukasaMotions();
  public static expressions = new TsukasaExpressions();
}
