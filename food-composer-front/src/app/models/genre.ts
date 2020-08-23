import { ComposerBean } from './composer-bean';

export class Genre extends ComposerBean {

    genreCd: string;
    genreNm: string;

    constructor(genreCd: string, genreNm: string){
        super(genreCd, genreNm);
    }

}
