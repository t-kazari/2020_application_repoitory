import { ComposerBean } from './composer-bean';

export class Shop extends ComposerBean {

    shopCd: string;
    shopNm: string;
    genreNm: string;
    tasteNm: string;
    prefectureNm: string;
    placeNm: string;
    url: string;

    constructor(shopCd: string, shopNm: string, genreNm: string, tasteNm: string, prefectureNm: string, placeNm: string, url: string) {
        super(shopCd, shopNm, genreNm, tasteNm, prefectureNm, placeNm ,url);
    }

}
