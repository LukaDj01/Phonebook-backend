import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    public getUsers(){
        return this.usersService.getAll();
    }

    @Get(':id')
    public getUser( @Param('id', ParseIntPipe) id: number){
        return this.usersService.getById(id);
    }
}
