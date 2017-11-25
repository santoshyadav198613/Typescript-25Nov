import { IAddress, name, TestFunc } from './Iaddress';
export  class Student {
    private id: number;
    public fname: string;
    protected lname: string;
    readonly dob: Date;

    constructor(name: string) {
        this.fname = name;
    }

    get getId() {
        return this.id;
    }

    set setId(id) {
        this.id = id;
    }

    private getName(): string {
        return this.fname + this.lname;
    }
}

