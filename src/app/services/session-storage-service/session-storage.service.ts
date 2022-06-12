import { Injectable } from '@angular/core';

import { Session } from 'src/app/models/Session';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

    public setSession(session: Session) {
      console.log(session)
      this.set("id", session.user.id ? session.user.id.toString() : "");
      this.set("name", session.user.name);
      this.set("email", session.user.email);
      this.set("token", session.token);
    }

    public getSession(): Session {
        return new Session(
          new User(
            Number.parseInt(this.get("id") || ""),
            this.get("name") || "",
            this.get("email") || "",
            "",
            ""
          ),
          this.get("token") || ""
        );
    }

    public removeSession() {
      this.clear();
    }

    private set(key:string,value:string) {
      sessionStorage.setItem(key, value);
    }

    private get(key:string): string | null {
      return sessionStorage.getItem(key);
    }

    private remove(key:string) {
      return sessionStorage.removeItem(key);
    }

    private clear(){
      return sessionStorage.clear();
    }

}
