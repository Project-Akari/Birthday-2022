import { LukaExpressions } from "./luka_expressions";
import { LukaMotions } from "./luka_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class LukaModel {
  public static characterName = "Luka";
  public static character: PuroSekaiChar = PuroSekaiChar.Luka;
  public static motions = new LukaMotions();
  public static expressions = new LukaExpressions();
}
