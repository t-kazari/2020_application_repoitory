import { Comment } from 'src/app/models/comment'

export class MyComment extends Comment {

    constructor(content: string){
        super(content, false, null);
    }
}
