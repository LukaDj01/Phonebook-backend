import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';

@Injectable()
export class UsersService {
    list: User[] = [
        {
            id: 1,
            firstName: "Milos",
            lastName: "Lazarevic",
            phoneNumber: "069123456",
            email: "milos12@gmail.com"
        },
        {
            id: 2,
            firstName: "Danica",
            lastName: "Djordjevic",
            phoneNumber: "062338228",
            email: "danidj@gmail.com"
        },
        {
            id: 3,
            firstName: "Lazar",
            lastName: "Stankovic",
            phoneNumber: "069525812",
            email: "lazaaa11@gmail.com"
        },
        {
            id: 4,
            firstName: "Stefan",
            lastName: "Bojkovic",
            phoneNumber: "060250491",
            email: "stefkob@gmail.com"
        },
        {
            id: 5,
            firstName: "Ivana",
            lastName: "Ivanovic",
            phoneNumber: "061515121",
            email: "ivanov@gmail.com"
        }
    ];

    public getAll() {
        return this.list;
    }

    public getById(id: number) {
        return this.list.find((user) => user.id === id);
    }
}
