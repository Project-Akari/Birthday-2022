import { AkitoModel } from "@l2d-setup/Resources/characters/akito/akito_model";
import { AnModel } from "@l2d-setup/Resources/characters/an/an_model";
import { EnaModel } from "@l2d-setup/Resources/characters/ena/ena_model";
import { HarukaModel } from "@l2d-setup/Resources/characters/haruka/haruka_model";
import { HonamiModel } from "@l2d-setup/Resources/characters/honami/honami_model";
import { KaitoModel } from "@l2d-setup/Resources/characters/kaito/kaito_model";
import { KanadeModel } from "@l2d-setup/Resources/characters/kanade/kanade_model";
import { LukaModel } from "@l2d-setup/Resources/characters/luka/luka_model";
import { MafuyuModel } from "@l2d-setup/Resources/characters/mafuyu/mafuyu_model";
import { ShizukuModel } from "@l2d-setup/Resources/characters/shizuku/shizuku_model";
import { TouyaModel } from "@l2d-setup/Resources/characters/touya/touya_model";
import { TsukasaModel } from "@l2d-setup/Resources/characters/tsukasa/tsukasa_model";
import { DialogModel } from "../dialog-box/models/dialog";
import { ModalContent } from "../dialog-box/models/modal_content";
import { ModelMotion } from "../dialog-box/models/model_motion";
import { IGreetings } from "./greetings";

export class IntroGreeting implements IGreetings {
  dialogs: DialogModel[] = [];
  greetingId: string = "intro";

  constructor() {
    this._initDialog();
  }

  getDialog(page: number): DialogModel {
    return this.dialogs.filter(f => f.page == page)[0];
  }

  private _initDialog(): void {
    this.dialogs.push(new DialogModel({
      page: 1,
      characterName: "Everyone",
      dialog: `Happy Birthday Akari!!!`,
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: EnaModel.character,
          motion: EnaModel.motions.adultGlad1,
          expression: EnaModel.expressions.smile1
        }),
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.coolPoseNod1,
          expression: LukaModel.expressions.smile1
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.coolPoseNod3,
          expression: MafuyuModel.expressions.smile1
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 2,
      characterName: EnaModel.characterName,
      dialog: `It's our first time celebrating Akari's birthday together.`,
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: EnaModel.character,
          motion: EnaModel.motions.adultTilthead1,
          expression: EnaModel.expressions.smile5
        }),
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.adultNod3,
          expression: LukaModel.expressions.sparkling
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.adultNod1,
          expression: MafuyuModel.expressions.smile3
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 3,
      characterName: LukaModel.characterName,
      dialog: `Yeah, It's kind of sad that we didn't met Akari back then.`,
      modelMotion: [
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.adultTilthead2,
          expression: LukaModel.expressions.sad2
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 4,
      characterName: MafuyuModel.characterName,
      dialog: `By the way, Honami told me the other day that she was about to cry when she didn't get my card. Fufu`,
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: EnaModel.character,
          motion: EnaModel.motions.cuteSmug1,
          expression: EnaModel.expressions.smile8
        }),
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.happyForward1,
          expression: LukaModel.expressions.darkSmile1
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.happyPoseNode3,
          expression: MafuyuModel.expressions.darkSmile2
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 5,
      characterName: MafuyuModel.characterName,
      dialog: `I hope you will get my card on your birthday. Why don't you
        try to pull right now Akari? Hehehe`,
      modelMotion: [
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.cutePoseTilthead4,
          expression: MafuyuModel.expressions.smile4
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.cuteShakehead3,
          expression: MafuyuModel.expressions.smile5,
          triggeredText: 'pull'
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 6,
      characterName: LukaModel.characterName,
      dialog: `Oh. Everyone is here!`,
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: EnaModel.character,
          motion: EnaModel.motions.coolShakehand1,
          expression: EnaModel.expressions.smile1
        }),
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.happyShakehand1,
          expression: LukaModel.expressions.sparkling
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.cuteShakehand1,
          expression: MafuyuModel.expressions.shy2
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 7,
      characterName: "Everyone",
      dialog: `Happy Birthday Akari!!`,
      changeModels: [HarukaModel.character, AnModel.character, HonamiModel.character],
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: HarukaModel.character,
          motion: HarukaModel.motions.coolBlushed1,
          expression: HarukaModel.expressions.sparkling
        }),
        new ModelMotion({
          index: 1,
          character: AnModel.character,
          motion: AnModel.motions.happyForward2,
          expression: AnModel.expressions.sparkling
        }),
        new ModelMotion({
          index: 2,
          character: HonamiModel.character,
          motion: HonamiModel.motions.happyGlad1,
          expression: HonamiModel.expressions.sparkling
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 8,
      characterName: "Everyone",
      dialog: `Happy Birthday Akari!!`,
      changeModels: [AkitoModel.character, TouyaModel.character, TsukasaModel.character],
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: AkitoModel.character,
          motion: AkitoModel.motions.adultTilthead0304,
          expression: AkitoModel.expressions.smile1
        }),
        new ModelMotion({
          index: 1,
          character: TouyaModel.character,
          motion: TouyaModel.motions.adultTilthead1,
          expression: TouyaModel.expressions.smile1
        }),
        new ModelMotion({
          index: 2,
          character: TsukasaModel.character,
          motion: TsukasaModel.motions.adultTilthead2,
          expression: TsukasaModel.expressions.smile2
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 9,
      characterName: "Everyone",
      dialog: `Happy Birthday Akari!!`,
      changeModels: [KanadeModel.character, KaitoModel.character, ShizukuModel.character],
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: KanadeModel.character,
          motion: KanadeModel.motions.animalTiltheadNod0101,
          expression: KanadeModel.expressions.smile1
        }),
        new ModelMotion({
          index: 1,
          character: KaitoModel.character,
          motion: KaitoModel.motions.adultTilthead1,
          expression: KaitoModel.expressions.smile2
        }),
        new ModelMotion({
          index: 2,
          character: ShizukuModel.character,
          motion: ShizukuModel.motions.happyTilthead1,
          expression: ShizukuModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 10,
      characterName: LukaModel.characterName,
      dialog: `Since everyone is here, why don't we read our greetings to
        Akari? then I will start first.`,
      changeModels: [LukaModel.character],
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: LukaModel.character,
          motion: LukaModel.motions.adultNod3,
          expression: LukaModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 11,
      characterName: LukaModel.portName,
      dialog: `"Are you enjoying your day so far? Know this, superstar
        A wonderful day still awaits you Right now is a grand moment for you
        I wish you a great day and happy birthday" - Arya`,
      modelMotion: [
        new ModelMotion({
          character: LukaModel.character,
          motion: LukaModel.motions.adultTilthead2,
          expression: LukaModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 12,
      characterName: LukaModel.characterName,
      dialog: `I'm done reading mine. Who's next?`,
      modelMotion: [
        new ModelMotion({
          character: LukaModel.character,
          motion: LukaModel.motions.coolPoseNod1,
          expression: LukaModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 13,
      characterName: KaitoModel.characterName,
      dialog: `Me.`,
      changeModels: [KaitoModel.character],
      modelMotion: [
        new ModelMotion({
          character: KaitoModel.character,
          motion: KaitoModel.motions.normalShakehand1,
          expression: KaitoModel.expressions.smile3
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 14,
      characterName: KaitoModel.portName,
      dialog: `"Happy Birthday Akariiiiiiiiin. Sana maging happy ang
        araw mo today at wag ka pa stress sa work. Abusuhin ang VL
        if ma pwede gashaahs chz" - Yuyan`,
      modelMotion: [
        new ModelMotion({
          character: KaitoModel.character,
          motion: KaitoModel.motions.normalSmug1,
          expression: KaitoModel.expressions.smile1
        }),
        new ModelMotion({
          character: KaitoModel.character,
          motion: KaitoModel.motions.adultTilthead1,
          expression: KaitoModel.expressions.smile3,
          triggeredText: 'Abusuhin'
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 15,
      characterName: KaitoModel.characterName,
      dialog: `That's all.`,
      modelMotion: [
        new ModelMotion({
          character: KaitoModel.character,
          motion: KaitoModel.motions.adultTilthead1,
          expression: KaitoModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 16,
      characterName: HarukaModel.characterName,
      dialog: `Then I'm next.`,
      changeModels: [HarukaModel.character],
      modelMotion: [
        new ModelMotion({
          character: HarukaModel.character,
          motion: HarukaModel.motions.coolBlushed1,
          expression: HarukaModel.expressions.smile1
        }),
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 17,
      characterName: HarukaModel.portName,
      dialog: `Happy Birthday Akari. *Shows you a birthday card and
        an art*`,
      modelMotion: [
        new ModelMotion({
          character: HarukaModel.character,
          motion: HarukaModel.motions.cuteFidget1,
          expression: HarukaModel.expressions.shy1
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Juicy',
          isPortrait: true,
          link: 'assets/img/greetings/juicy/greeting.png'
        }),
        new ModalContent({
          title: 'Juicy',
          isPortrait: false,
          link: 'assets/img/greetings/juicy/art.png'
        })
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 18,
      characterName: HarukaModel.characterName,
      dialog: `I'm done.`,
      modelMotion: [
        new ModelMotion({
          character: HarukaModel.character,
          motion: HarukaModel.motions.coolNod1,
          expression: HarukaModel.expressions.smile1
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 19,
      characterName: AnModel.portName,
      dialog: `I'm next. "Hallo ate Koharu my project sekai buddy!! Happy happy birthday!!!
        I wuv u!!! Sana ay mag enjoy k sa iyong kaarawan!!!!" - Sham. *Shows you an art*`,
      changeModels: [AnModel.character],
      modelMotion: [
        new ModelMotion({
          character: AnModel.character,
          motion: AnModel.motions.coolNodTilthead0102,
          expression: AnModel.expressions.smile5
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Sham',
          isPortrait: true,
          link: 'assets/img/greetings/sham/art.png'
        })
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 20,
      characterName: AnModel.characterName,
      dialog: `I'm done.`,
      modelMotion: [
        new ModelMotion({
          character: AnModel.character,
          motion: AnModel.motions.happyForward2,
          expression: AnModel.expressions.smile5
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 21,
      characterName: TouyaModel.portName,
      dialog: `Oh It's my turn. "Happy Birthday Akari! Thanks for being such a good friend.
        Palagi kang nandyan para makinig sa mga problema ko at palagi mo akong sinasamahan sa mga laro. `,
      changeModels: [TouyaModel.character],
      modelMotion: [
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.coolTilthead1,
          expression: TouyaModel.expressions.normal1
        }),
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.adultTilthead0304,
          expression: TouyaModel.expressions.smile1,
          triggeredText: 'Palagi kang'
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 22,
      characterName: TouyaModel.portName,
      dialog: `Thank you kasi palagi mong sinasabayan mga trip ko at mga plans ko katulad nung sa party natin sa Port.
        Wish ko na sana mas alagaan mo na sarili mo.`,
      modelMotion: [
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.coolThink2,
          expression: TouyaModel.expressions.smile3
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 23,
      characterName: TouyaModel.portName,
      dialog: `Nakakabahala kayo palagi sa Port pag may nagkakasakit dahil sa kakapuyat niyo or dahil
        hindi kayo kumakain nang maayos. Wag masyadong matigas ang ulo!`,
      modelMotion: [
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.coolTrouble1,
          expression: TouyaModel.expressions.sad2
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 24,
      characterName: TouyaModel.portName,
      dialog: `Enjoy your day! More birthdays and more games to come. God Bless! Lablab!" - From your Anghel Friend.
        *Shows you a video from Sky*`,
      modelMotion: [
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.adultTilthead1,
          expression: TouyaModel.expressions.smile1
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Sky',
          isPortrait: false,
          isEmbed: true,
          link: 'https://drive.google.com/file/d/15mwpgUyylwdwtIpixTsooU7bKiKvXJ6x/preview'
        })
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 25,
      characterName: TouyaModel.characterName,
      dialog: `That's all.`,
      modelMotion: [
        new ModelMotion({
          character: TouyaModel.character,
          motion: TouyaModel.motions.coolTilthead1,
          expression: TouyaModel.expressions.smile3
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 26,
      characterName: ShizukuModel.portName,
      dialog: `My turn. "Happy birthday Akarin!! Sana ay mabuhay ka pa nang matagal and enjoy your life to the fullest!
       alam kong super bait mo kaya you deserve all the good things in life and`,
      changeModels: [ShizukuModel.character],
      modelMotion: [
        new ModelMotion({
          character: ShizukuModel.character,
          motion: ShizukuModel.motions.happyTilthead1,
          expression: ShizukuModel.expressions.smile1
        }),
        new ModelMotion({
          character: ShizukuModel.character,
          motion: ShizukuModel.motions.coolTilthead2,
          expression: ShizukuModel.expressions.smile2,
          triggeredText: 'alam kong'
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 27,
      characterName: ShizukuModel.portName,
      dialog: `hope that never a bad day approach you though it's impossible but I hope the world will be always gentle to you.`,
      modelMotion: [
        new ModelMotion({
          character: ShizukuModel.character,
          motion: ShizukuModel.motions.happyTilthead1,
          expression: ShizukuModel.expressions.smile1
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 28,
      characterName: ShizukuModel.portName,
      dialog: ` Enjoy your day and always take care of yourself <3 I love you! And always know you have me
        and Port Café always." - Jikan. *Shows you a picture of both you and song*`,
      modelMotion: [
        new ModelMotion({
          character: ShizukuModel.character,
          motion: ShizukuModel.motions.coolTilthead2,
          expression: ShizukuModel.expressions.smile1
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Jikan',
          isPortrait: false,
          link: 'assets/img/greetings/jikan/genshin.png'
        }),
        new ModalContent({
          title: 'Jikan',
          isPortrait: false,
          isEmbed: true,
          link: 'https://drive.google.com/file/d/1-H6liL_fORi_ZxZ0NT9IqpFv7ZcOGvRk/preview'
        })
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 29,
      characterName: AkitoModel.portName,
      dialog: `Oh, It's my turn. Happy Birthday Akarin! *Shows you a greeting picture*`,
      changeModels: [AkitoModel.character],
      modelMotion: [
        new ModelMotion({
          character: AkitoModel.character,
          motion: AkitoModel.motions.adultTilthead0304,
          expression: AkitoModel.expressions.smile1
        }),
      ],
      modalContent: [
        new ModalContent({
          title: 'Doru',
          isPortrait: false,
          link: 'assets/img/greetings/doru/greeting.jpg'
        })
      ]
    }));
    this.dialogs.push(new DialogModel({
      page: 30,
      characterName: TsukasaModel.portName,
      dialog: `"Happy birthday AKARIN!!! Hope na makuha mo lahat ng mga gusto mo sa buhay pati si SUI-CHAN XDDDD!
        and MBTC! Greet muna ngayon ha! bawi ako pag di na busy" - Pogi pero Gwapo (Bene)`,
      changeModels: [TsukasaModel.character],
      modelMotion: [
        new ModelMotion({
          character: TsukasaModel.character,
          motion: TsukasaModel.motions.lookup1,
          expression: TsukasaModel.expressions.smile6
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 31,
      characterName: HonamiModel.portName,
      dialog: `I'm last. "Happy Birthday Akari!!! Sana ay masaya ka sa birthday mo. Pasensya kung kulang2x features
        ng Project Akari: Birthday Stage! HAHAHA Ito lang nakayanan ni Emma xD.`,
      changeModels: [HonamiModel.character],
      modelMotion: [
        new ModelMotion({
          character: HonamiModel.character,
          motion: HonamiModel.motions.cuteGlad1,
          expression: HonamiModel.expressions.smile2
        }),
        new ModelMotion({
          character: HonamiModel.character,
          motion: HonamiModel.motions.cuteShy1,
          expression: HonamiModel.expressions.smile1,
          triggeredText: 'Stage!'
        }),
      ],
    }));
    this.dialogs.push(new DialogModel({
      page: 32,
      characterName: HonamiModel.portName,
      dialog: `Sana ay makuha mo mga gusto mo sa buhay at si Ena Hihihi. Stay Healthy ka palagi kung hindi
        matatalo na kita sa project sekai at kukunin ko trono mo xD" - Emma`,
      modelMotion: [
        new ModelMotion({
          character: HonamiModel.character,
          motion: HonamiModel.motions.cutePoseNod1,
          expression: HonamiModel.expressions.sparkling
        }),
        new ModelMotion({
          character: HonamiModel.character,
          motion: HonamiModel.motions.cuteSmug1,
          expression: HonamiModel.expressions.closeEye2,
          triggeredText: 'matatalo'
        }),
      ],
    }));this.dialogs.push(new DialogModel({
      page: 33,
      characterName: LukaModel.characterName,
      dialog: `I think Honami was the last one. Happy Birthday Akari and Enjoy your day. Good Bye!`,
      changeModels: [EnaModel.character, LukaModel.character, MafuyuModel.character],
      modelMotion: [
        new ModelMotion({
          index: 0,
          character: EnaModel.character,
          motion: EnaModel.motions.adultGlad1,
          expression: EnaModel.expressions.smile1
        }),
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.coolPoseNod1,
          expression: LukaModel.expressions.smile1
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.coolPoseNod3,
          expression: MafuyuModel.expressions.smile1
        }),
        new ModelMotion({
          index: 0,
          character: EnaModel.character,
          motion: EnaModel.motions.coolShakehand1,
          expression: EnaModel.expressions.smile1,
          triggeredText: 'Good Bye'
        }),
        new ModelMotion({
          index: 1,
          character: LukaModel.character,
          motion: LukaModel.motions.happyShakehand1,
          expression: LukaModel.expressions.smile1,
          triggeredText: 'Good Bye'
        }),
        new ModelMotion({
          index: 2,
          character: MafuyuModel.character,
          motion: MafuyuModel.motions.cuteShakehand1,
          expression: MafuyuModel.expressions.smile1,
          triggeredText: 'Good Bye'
        }),
      ],
    }));
  }
}
