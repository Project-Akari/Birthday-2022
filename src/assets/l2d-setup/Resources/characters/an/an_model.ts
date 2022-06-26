import { AnExpressions } from "./an_expressions";
import { AnMotions } from "./an_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class AnModel {
  public static characterName = "An";
  public static character: PuroSekaiChar = PuroSekaiChar.An;
  public static directoryIndex = 1;
  public static motions = new AnMotions();
  public static expressions = new AnExpressions();
}
