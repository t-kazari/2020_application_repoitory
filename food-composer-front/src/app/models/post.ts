export class Post {

    token: string;
    genreCd: string;
    tasteCd: string;
    prefectureCd: string;
    placeCd: string;

    constructor(token: any, genreCd:string, tasteCd:string, prefectureCd: string, placeCd: string) {
        this.token = token;
        this.genreCd = genreCd;
        this.tasteCd = tasteCd;
        this.prefectureCd = prefectureCd;
        this.placeCd = placeCd;
    }

}
