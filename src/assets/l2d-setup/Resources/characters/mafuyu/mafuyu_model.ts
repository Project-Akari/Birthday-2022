import { MafuyuExpressions } from "./mafuyu_expressions";
import { MafuyuMotions } from "./mafuyu_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class MafuyuModel {
  public static characterName = "Mafuyu";
  public static character = PuroSekaiChar.Mafuyu;
  public static directoryIndex = 2;
  public static motions = new MafuyuMotions();
  public static expressions = new MafuyuExpressions();
}
