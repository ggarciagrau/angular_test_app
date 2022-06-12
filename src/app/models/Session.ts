import { User } from "./User";

export class Session {

    constructor(
        public user: User,
        public token: string
    ) {

    }

}