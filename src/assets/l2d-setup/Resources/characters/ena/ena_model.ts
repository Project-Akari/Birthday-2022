import { EnaExpressions } from "./ena_expressions";
import { EnaMotions } from "./ena_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class EnaModel {
  public static characterName = "Ena";
  public static character = PuroSekaiChar.Ena;
  public static motions = new EnaMotions();
  public static expressions = new EnaExpressions();
}
