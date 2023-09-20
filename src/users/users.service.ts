import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/models/user.dto';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    public getAll() {
        return this.userRepository.find();
    }

    public getById(id: number) {
        return this.userRepository.findOne({where: {id}});
    }

    public async create(userDto: UserDto){
        const user = this.userRepository.create(userDto);
        return await this.userRepository.save(user);
    }

    public async delete(id: number){
        return await this.userRepository.delete(id);
    }

    public async update(id: number, dto: UserDto){
        return await this.userRepository.update(id, dto);
    }
}
