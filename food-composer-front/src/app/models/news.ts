export class News {

    newsCategory: number;
    contents: string;
    registedDate: string;

    constructor(newsCategory: number, contents: string, registedDate: string) {
        this.newsCategory = newsCategory;
        this.contents = contents;
        this.registedDate = registedDate.split(" ")[0];
    }

}
