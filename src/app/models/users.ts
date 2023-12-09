export class Users {

    id: string | undefined;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    status: string | undefined;

    constructor(id?: string, name?: string, email?: string, password?: string,
        status?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.status = status;
    }


}