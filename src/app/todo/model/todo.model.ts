export class Todo {

    public id:number;
    public text:string;
    public completed:boolean;

    constructor( text:string ){

        // Primer caracter del texto en mayusculas y concatena el resto en minusculas.
        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.completed = false;

        this.id = Math.random();
    }
}