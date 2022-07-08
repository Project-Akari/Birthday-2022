interface ISekaiGroupParam {
    groupMessage: string;
    logoUrl: string;
    groupImg: string;
    color: string;
}

export class SekaiGroup {
    private _groupMessage: string;
    private _logoUrl: string;
    private _groupImg: string;
    private _color: string;
    
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
    

    constructor({groupMessage, logoUrl, groupImg, color} : ISekaiGroupParam) {
        this._groupMessage = groupMessage;
        this._logoUrl = logoUrl;
        this._groupImg = groupImg;
        this._color = color;
    }
}

export class SekaiGroups {
    public static groups: SekaiGroup[] = [
        new SekaiGroup({
            logoUrl: 'assets/img/group-logo/LeoNeed.png',
            groupImg: 'assets/img/Background/LeoNeedGroup.png',
            groupMessage: 'Singers entrusted with the songs and feelings of creators from all over the world',
            color: '#ffffff'
        }),
        new SekaiGroup({
            logoUrl: 'assets/img/group-logo/LeoNeed.png',
            groupImg: 'assets/img/Background/LeoNeedGroup.png',
            groupMessage: 'Four childhood friends overcome their defferences to form a band',
            color: '#2f32c9'
        }),
        new SekaiGroup({
            logoUrl: 'assets/img/group-logo/MoreMoreJump.png',
            groupImg: 'assets/img/Background/MoreMoreJumpGroup.png',
            groupMessage: 'A unique idol group formed by a girl',
            color: '#2f32c9'
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