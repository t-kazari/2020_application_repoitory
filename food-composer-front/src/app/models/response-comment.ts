import { ComposerBean } from './composer-bean';
import { Comment } from 'src/app/models/comment'

export class ResponseComment extends Comment {

    constructor(content: string, responseFlg: boolean, responseList: ComposerBean[]){
       super(content, responseFlg, responseList);
    }

}
