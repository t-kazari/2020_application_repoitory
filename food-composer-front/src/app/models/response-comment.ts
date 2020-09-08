import { ComposerBean } from './composer-bean';
import { Comment } from 'src/app/models/comment'
import { CommentType } from './comment-type.enum';

export class ResponseComment extends Comment {

    constructor(content: string, commentType: CommentType, responseList: ComposerBean[]){
       super(content, commentType, responseList);
    }

}
