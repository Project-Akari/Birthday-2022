interface ISekaiGroupParam {
    groupMessage: string;
    logoUrl: string;
    groupImg: string;
    color: string;
    textColor: string;
}

export class SekaiGroup {
    private _groupMessage: string;
    private _logoUrl: string;
    private _groupImg: string;
    private _color: string;
    private _textColor: string;

    public get groupMessage() : string {
        return this._groupMessage;
    }

    public get logoUrl() : string {
        return this._logoUrl;
    }

    public get groupImage() : string {
        return this._groupImg;
    }

    public get color() : string {
        return this._color;
    }

    public get textColor() : string {
        return this._textColor;
    }


    constructor({groupMessage, logoUrl, groupImg, color, textColor} : ISekaiGroupParam) {
        this._groupMessage = groupMessage;
        this._logoUrl = logoUrl;
        this._groupImg = groupImg;
        this._color = color;
        this._textColor = textColor;
    }
}

export class SekaiGroups {
    public static groups: SekaiGroup[] = [
        new SekaiGroup({
            logoUrl: 'assets/img/group-logo/VirtualSinger.png',
            groupImg: 'assets/img/background/VirtualSingerGroup.png',
            groupMessage: 'Singers entrusted with the songs and feelings of creators from all over the world.',
            color: '#ffffff',
            textColor: '#565469'
        }),
        new SekaiGroup({
            logoUrl: 'assets/img/group-logo/LeoNeed.png',
            groupImg: 'assets/img/background/LeoNeedGroup.png',
            groupMessage: 'Four childhood friends overcome their defferences to form a band',
            color: '#2f32c9',
            textColor: '#F6FBFF'
        }),
        new SekaiGroup({
            logoUrl: 'assets/img/group-logo/MoreMoreJump.png',
            groupImg: 'assets/img/background/MoreMoreJumpGroup.png',
            groupMessage: 'A unique idol group formed by a girl with a dream and three other girls who had given up on theirs.',
            color: '#90DE32',
            textColor: '#F6FBFF'
        }),
        new SekaiGroup({
            logoUrl: 'assets/img/group-logo/VividSquad.png',
            groupImg: 'assets/img/background/VividSquadGroup.png',
            groupMessage: 'A talented group of street artists who teamed up to surpass a legend.',
            color: '#EA2574',
            textColor: '#F6FBFF'
        }),
        new SekaiGroup({
            logoUrl: 'assets/img/group-logo/WxS.png',
            groupImg: 'assets/img/background/WxSGroup.png',
            groupMessage: "Wonderhoy! An electic group of energetic performers. Every day's a good day to fly high.",
            color: '#FDA116',
            textColor: '#F6FBFF'
        }),
        new SekaiGroup({
            logoUrl: 'assets/img/group-logo/N25.png',
            groupImg: 'assets/img/background/N25Group.png',
            groupMessage: "A mysterious musical group that operates from 25:00 (1 a.m).",
            color: '#9253A1',
            textColor: '#F6FBFF'
        })
    ];

    public static getGroupImages(): string[] {
        const groupImages: string[] = [];
        this.groups.forEach((value) => {
            groupImages.push(value.groupImage);
        });
        return groupImages;
    }
}
