import { GroupsKey } from "./groups";

interface GroupMemberArgs {
  group: GroupsKey;
  greetingId: string;
  portName: string;
  imgUrl: string;
}
export class GroupMember {
  private _group: GroupsKey;
  private _portName: string;
  private _greetingId: string;
  private _imgUrl: string;

  public get group() : GroupsKey {
    return this._group;
  }

  public get greetingId() : string {
    return this._greetingId;
  }

  public get portName() : string {
    return this._portName;
  }

  public get imgUrl() : string {
    return this._imgUrl;
  }

  constructor({group, greetingId, portName, imgUrl} : GroupMemberArgs) {
    this._group = group;
    this._greetingId = greetingId;
    this._portName = portName;
    this._imgUrl = imgUrl;
  }
}
