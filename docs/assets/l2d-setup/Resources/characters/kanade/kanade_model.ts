import { KanadeExpressions } from "./kanade_expressions";
import { KanadeMotions } from "./kanade_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class KanadeModel {
  public static characterName = "Kanade";
  public static portName = `${this.characterName} (Asra)`;
  public static character: PuroSekaiChar = PuroSekaiChar.Kanade;
  public static directoryIndex = this.character;
  public static motions = new KanadeMotions();
  public static expressions = new KanadeExpressions();
}
