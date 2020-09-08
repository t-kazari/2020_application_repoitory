import { ComposerBean } from './composer-bean';
import { ResponseComment } from './response-comment';
import { MyComment } from './my-comment';
import { CommentType } from './comment-type.enum';

export class Comment {

  content: string;
  commentType: CommentType;
  responseList: ComposerBean[];

  constructor(content: string, commentType: CommentType, responseList: ComposerBean[]){
    this.content = content;
    this.commentType = commentType;
    if(responseList != null){
      this.responseList = responseList;
    }
  }

}
