import { JikanGreeting } from "src/app/greetings/greetings-dialog/jikan";
import { GroupMember } from "./member";

export enum GroupsKey {
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividSquad,
  wxS,
  n25
}

interface SekaiGroupArgs {
  groupName: string;
  imgUrl: string;
  bgImgUrl: string;
  groupKey: GroupsKey,
  members: GroupMember[]
}

export class SekaiGroup {
  private _groupName: string;
  private _groupImgUrl: string;
  private _groupBGImgUrl: string;
  private _groupKey: GroupsKey;
  private _members: GroupMember[]

  public get name() : string {
    return this._groupName;
  }

  public get imgUrl() : string {
    return this._groupImgUrl;
  }

  public get bgImgUrl() : string {
    return this._groupBGImgUrl;
  }


  public get key() : GroupsKey {
    return this._groupKey;
  }

  public get members() : GroupMember[] {
    return this._members;
  }

  constructor({groupName, imgUrl, bgImgUrl, groupKey, members} : SekaiGroupArgs) {
    this._groupName = groupName;
    this._groupImgUrl = imgUrl;
    this._groupBGImgUrl = bgImgUrl;
    this._groupKey = groupKey;
    this._members = members;
  }

  public getClass(key: GroupsKey): any {
    if (this.key == key) return 'group-logo-img active';
    else return 'group-logo-img';
  }
}

export class SekaiGroups {
  public static virtualSinger: SekaiGroup = new SekaiGroup({
    groupName: 'Virtual Singer',
    imgUrl: 'assets/img/group-logo/VirtualSinger.png',
    bgImgUrl: 'assets/img/background/virtual-singer.png',
    groupKey: GroupsKey.virtualSinger,
    members: [
      new GroupMember({
        group: GroupsKey.virtualSinger,
        greetingId: JikanGreeting.greetingId,
        portName: 'Jikan',
        imgUrl: 'assets/img/characters/Jikan.png'
      })
    ]
  });
  public static leoNeed: SekaiGroup = new SekaiGroup({
    groupName: 'Virtual Singer',
    imgUrl: 'assets/img/group-logo/LeoNeed.png',
    bgImgUrl: 'assets/img/background/leo-need.png',
    groupKey: GroupsKey.leoNeed,
    members: [
      new GroupMember({
        group: GroupsKey.leoNeed,
        greetingId: '',
        portName: 'Emma-Kun',
        imgUrl: 'assets/img/characters/EmmaKun.png'
      })
    ]
  });
  public static moreMoreJump: SekaiGroup = new SekaiGroup({
    groupName: 'More More Jump',
    imgUrl: 'assets/img/group-logo/MoreMoreJump.png',
    bgImgUrl: 'assets/img/background/more-more-jump.png',
    groupKey: GroupsKey.moreMoreJump,
    members: [
      new GroupMember({
        group: GroupsKey.moreMoreJump,
        greetingId: '',
        portName: 'Juicy',
        imgUrl: 'assets/img/characters/Juicy.png'
      })
    ]
  });
  public static vividSquad: SekaiGroup = new SekaiGroup({
    groupName: 'Vivid Bad Squad',
    imgUrl: 'assets/img/group-logo/VividSquad.png',
    bgImgUrl: 'assets/img/background/vivid.png',
    groupKey: GroupsKey.vividSquad,
    members: [
      new GroupMember({
        group: GroupsKey.vividSquad,
        greetingId: '',
        portName: 'Doru',
        imgUrl: 'assets/img/characters/Doru.png'
      }),
      new GroupMember({
        group: GroupsKey.vividSquad,
        greetingId: '',
        portName: 'Sham',
        imgUrl: 'assets/img/characters/Sham.png'
      }),
      new GroupMember({
        group: GroupsKey.vividSquad,
        greetingId: '',
        portName: 'Sky',
        imgUrl: 'assets/img/characters/Sky.png'
      })
    ]
  });
  public static wonderlandxS: SekaiGroup = new SekaiGroup({
    groupName: 'Wonderlands x Showtime',
    imgUrl: 'assets/img/group-logo/WxS.png',
    bgImgUrl: 'assets/img/background/WxS.png',
    groupKey: GroupsKey.wxS,
    members: [
      new GroupMember({
        group: GroupsKey.wxS,
        greetingId: '',
        portName: 'Bene',
        imgUrl: 'assets/img/characters/Bene.png'
      })
    ]
  });
  public static nightCordAt25: SekaiGroup = new SekaiGroup({
    groupName: 'Nightcord at 25:00',
    imgUrl: 'assets/img/group-logo/N25.png',
    bgImgUrl: 'assets/img/background/n25.png',
    groupKey: GroupsKey.n25,
    members: [
      new GroupMember({
        group: GroupsKey.n25,
        greetingId: '',
        portName: 'Asra',
        imgUrl: 'assets/img/characters/Asra.png'
      })
    ]
  });

  public static groups: SekaiGroup[] = [
    SekaiGroups.virtualSinger,
    SekaiGroups.leoNeed,
    SekaiGroups.moreMoreJump,
    SekaiGroups.vividSquad,
    SekaiGroups.wonderlandxS,
    SekaiGroups.nightCordAt25
  ]

  public static getGroup(key: GroupsKey): SekaiGroup {
    switch (key) {
      case GroupsKey.virtualSinger:
        return this.virtualSinger;
      case GroupsKey.leoNeed:
        return this.leoNeed;
      case GroupsKey.moreMoreJump:
        return this.moreMoreJump;
      case GroupsKey.vividSquad:
        return this.vividSquad;
      case GroupsKey.wxS:
        return this.wonderlandxS;
      case GroupsKey.n25:
        return this.nightCordAt25;
      default:
        return null;
    }
  }
}
