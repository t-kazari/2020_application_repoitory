export class ComposerBean {

    beanCd: string;
    beanNm: string;
    attribute1?: string;
    attribute2?: string;
    attribute3?: string;
    attribute4?: string;
    attribute5?: string;

    constructor(beanCd: string, beanNm: string, attribute1?: string, attribute2?: string, attribute3?: string, attribute4?: string, attribute5?: string) {
        this.beanCd = beanCd;
        this.beanNm = beanNm;
        this.attribute1 = attribute1;
        this.attribute2 = attribute2;
        this.attribute3 = attribute3;
        this.attribute4 = attribute4;
        this.attribute5 = attribute5;
    }

}
