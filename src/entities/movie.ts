export class Movie {
    id: number
    title: string
    protagonist: string
    antagonist: string

    constructor(
        id: number,
        title : string,
        protagonist: string,
        antagonist: string
    ) {
        this.id = id
        this.title = title
        this.protagonist = protagonist
        this.antagonist = antagonist
    }
}