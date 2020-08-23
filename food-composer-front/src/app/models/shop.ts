import { ComposerBean } from './composer-bean';

export class Shop extends ComposerBean {

    shopCd: string;
    shopNm: string;
    url: string;

    constructor(shopCd: string, shopNm: string, url: string) {
        super(shopCd, shopNm, url);
    }

}
