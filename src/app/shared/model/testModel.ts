

export class TestWishItem {
    txt: string;
    isCompleted:boolean
    constructor(txt: string, isCompleted: boolean = false){
        this.txt = txt;
        this.isCompleted = isCompleted;
    }
}