import { HarukaExpressions } from "./haruka_expressions";
import { HarukaMotions } from "./haruka_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class HarukaModel {
  public static characterName = "Haruka";
  public static portName = `${this.characterName} (Juicy)`;
  public static character: PuroSekaiChar = PuroSekaiChar.Haruka;
  public static directoryIndex = this.character;
  public static motions = new HarukaMotions();
  public static expressions = new HarukaExpressions();
}
