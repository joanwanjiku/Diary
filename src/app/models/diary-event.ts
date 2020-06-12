export class DiaryEvent {

    constructor(
        public id: number,
        public name: string,
        public description: string,
        public author: string,
        public date: Date
    ){}
}
