import { ComposerBean } from './composer-bean';
import { ResponseComment } from './response-comment';
import { MyComment } from './my-comment';

export class Comment {
  
  content: string;
  responseFlg: boolean;
  responseList: ComposerBean[];

  constructor(content: string, responseFlg: boolean, responseList: ComposerBean[]){
    this.content = content;
    this.responseFlg = responseFlg;
    if(responseList != null){
      this.responseList = responseList;
    }
  }

}
