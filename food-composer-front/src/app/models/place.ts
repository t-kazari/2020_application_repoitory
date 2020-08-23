import { ComposerBean } from './composer-bean';

export class Place extends ComposerBean {

    placeCd: string;
    placeNm: string;

    constructor(placeCd: string, placeNm: string){
        super(placeCd, placeNm);
    }

}
