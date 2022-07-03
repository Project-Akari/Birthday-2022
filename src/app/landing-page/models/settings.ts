export enum ProjectAkariKeys {
  skipIntro
}
export class ProjectAkariSettings {
  public static toggleIntro(): boolean {
    const introKey = ProjectAkariKeys.skipIntro.toString();
    let stored = {
      intro: false
    }
    let skipIntro = localStorage.getItem(introKey);
    if (!skipIntro) stored.intro = true;
    else {
      const parseStored: {intro: boolean} = JSON.parse(skipIntro);
      stored.intro = !parseStored.intro;
    }
    localStorage.setItem(introKey, JSON.stringify(stored));
    return stored.intro;
  }

  public static isIntroSkipped(): boolean {
    const introKey = ProjectAkariKeys.skipIntro.toString();
    let stored = {
      intro: false
    }
    let skipIntro = localStorage.getItem(introKey);
    console.log(skipIntro);
    if (!skipIntro) stored.intro = false;
    else {
      const parseStored: {intro: boolean} = JSON.parse(skipIntro);
      stored.intro = parseStored.intro;
    }

    return stored.intro;
  }
}
