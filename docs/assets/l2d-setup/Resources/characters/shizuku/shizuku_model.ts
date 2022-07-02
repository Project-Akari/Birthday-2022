import { ShizukuExpressions } from "./shizuku_expressions";
import { ShizukuMotions } from "./shizuku_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class ShizukuModel {
  public static characterName = "Shizuku";
  public static portName = `${this.characterName} (Jikan)`;
  public static character = PuroSekaiChar.Shizuku;
  public static directoryIndex = this.character;
  public static motions = new ShizukuMotions();
  public static expressions = new ShizukuExpressions();
}
