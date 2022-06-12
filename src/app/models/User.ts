export class User {

    constructor(
        public id: number | null,
        public name: string,
        public email: string,
        public password: string,
        public password_confirmation: string
    ) {

    }

}