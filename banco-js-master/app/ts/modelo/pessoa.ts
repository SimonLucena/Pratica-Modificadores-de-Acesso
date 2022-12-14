class Pessoa {
    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: string) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = new Date(dataNascimento);
    }

    get nome(): string {
        return this._nome;
    }

    set nome(v : string) {
        this._nome = v;
    }
    

    get idade(): number {
        return this._idade;
    }

    set idade(v : number) {
        this._idade = v;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(v : Date) {
        this._dataNascimento = v;
    }

}