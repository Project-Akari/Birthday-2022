import { AkitoExpressions } from "./akito_expressions";
import { AkitoMotions } from "./akito_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class AkitoModel {
  public static characterName = "Akito";
  public static character: PuroSekaiChar = PuroSekaiChar.Akito;
  public static directoryIndex = this.character;
  public static motions = new AkitoMotions();
  public static expressions = new AkitoExpressions();
}
