import { DialogModel } from "../dialog-box/models/dialog";
import { IntroGreeting } from "./intro";

export interface IGreetings {
  greetingId: string;
  dialogs: DialogModel[];
  getDialog(page: number): DialogModel;
}
export class Greetings {
  private static _greetings: IGreetings[] = [new IntroGreeting()]

  public static getGreeting(greetingId: string): IGreetings {
    const greetings = this._greetings.filter(f => f.greetingId == greetingId);
    return greetings.length > 0 ? greetings[0] : null;
  }
}
