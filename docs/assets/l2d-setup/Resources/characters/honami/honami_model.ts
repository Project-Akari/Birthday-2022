import { HonamiExpressions } from "./honami_expressions";
import { HonamiMotions } from "./honami_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class HonamiModel {
  public static characterName = "Honami";
  public static portName = `${this.characterName} (Emma-Kun)`;
  public static character: PuroSekaiChar = PuroSekaiChar.Honami;
  public static directoryIndex = this.character;
  public static motions = new HonamiMotions();
  public static expressions = new HonamiExpressions();
}
