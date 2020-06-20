export class Post {

    token: string;
    prefectureCd: string;
    placeCd: string;
    genreCd: string;
    tasteCd: string;

    constructor(token: any, prefectureCd: string, placeCd: string, genreCd:string, tasteCd:string) {
        this.token = token;
        this.prefectureCd = prefectureCd;
        this.placeCd = placeCd;
        this.genreCd = genreCd;
        this.tasteCd = tasteCd;
    }

}
