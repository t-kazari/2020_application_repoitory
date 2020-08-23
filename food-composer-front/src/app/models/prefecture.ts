import { ComposerBean } from './composer-bean';

export class Prefecture extends ComposerBean {

    prefectureCd: string;
    prefectureNm: string;

    constructor(prefectureCd: string, prefectureNm: string) {
        super(prefectureCd, prefectureNm);
    }

}
