import { DialogModel } from "../dialog-box/models/dialog";
import { EmmaKunGreeting } from "./emma-kun";
import { IntroGreeting } from "./intro";
import { JikanGreeting } from "./jikan";
import { JuicyGreeting } from "./juicy";
import { DoruGreeting } from "./doru";
import { ShamGreeting } from "./sham";
import { SkyGreeting } from "./sky";
import { BeneGreeting } from "./bene";
import { AsraGreeting } from "./asra";
import { AryaGreeting } from "./arya";
import { YuyanGreeting } from "./yuyan";

export interface IGreetings {
  greetingId: string;
  dialogs: DialogModel[];
  getDialog(page: number): DialogModel;
}
export class Greetings {
  private static _greetings: IGreetings[] = [
    new IntroGreeting(),
    new JikanGreeting(),
    new EmmaKunGreeting(),
    new JuicyGreeting(),
    new DoruGreeting(),
    new ShamGreeting(),
    new SkyGreeting(),
    new BeneGreeting(),
    new AsraGreeting(),
    new AryaGreeting(),
    new YuyanGreeting()
  ];

  public static getGreeting(greetingId: string): IGreetings {
    const greetings = this._greetings.filter(f => f.greetingId == greetingId);
    return greetings.length > 0 ? greetings[0] : null;
  }
}
