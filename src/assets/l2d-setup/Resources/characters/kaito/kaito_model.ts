import { KaitoExpressions } from "./kaito_expressions";
import { KaitoMotions } from "./kaito_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class KaitoModel {
  public static characterName = "Kaito";
  public static character: PuroSekaiChar = PuroSekaiChar.Kaito;
  public static directoryIndex = this.character;
  public static motions = new KaitoMotions();
  public static expressions = new KaitoExpressions();
}
