import { Comment } from 'src/app/models/comment'
import { CommentType } from './comment-type.enum';

export class MyComment extends Comment {

    constructor(content: string){
        super(content, CommentType.REQUEST, null);
    }
}
