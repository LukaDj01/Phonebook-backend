import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/user.dto';
import { PhoneDto } from 'src/dto/phone.dto';

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

    @Post()
    public addUser(@Body() dto: UserDto){
        return this.usersService.create(dto);
    }

    @Delete(":id")
    public deleteUser(@Param("id", ParseIntPipe) id: number){
        return this.usersService.delete(id);
    }

    @Put(":id")
    public updateUser(@Param("id", ParseIntPipe) id: number, @Body() dto: UserDto){
        return this.usersService.update(id, dto);
    }

    @Post(':id')
    public addPhone(@Param('id', ParseIntPipe) userId: number, @Body() dto: PhoneDto){
        return this.usersService.addPhoneNumber(userId, dto);
    }

    
}
