export class ComposerBean {

    beanCd: string;
    beanNm: string;
    attribute?: string;

    constructor(beanCd: string, beanNm: string, attribute?: string) {
        this.beanCd = beanCd;
        this.beanNm = beanNm;
        this.attribute = attribute;
    }

}
