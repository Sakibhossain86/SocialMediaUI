export class User{
    userId!: number;
    userName!: string;
    dateOfBirth!: Date | string;
    email!: string;
    phoneNumber!: string;

      public constructor(init?: Partial<User>) {
          Object.assign(this,init)
        }
    
  }
