/*
 * File: user.controller.ts
 * File Created: 2023-09-21 09:31:58
 * Author: Val Liu (valuis0429@gmail.com)
 *
 * -----
 * Last Modified: 2023-11-06 08:01:35
 * Modified By: Val Liu
 * -----
 */

import { Controller } from "@nestjs/common";
import {
    ICreateUserDto,
    IDeleteUserDto,
    IReadUserDto,
    IUpdateUserDto,
    UserService,
} from "./user.service";
import { TypedBody, TypedRoute } from "@nestia/core";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @TypedRoute.Post()
    create(@TypedBody() createUserDto: ICreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @TypedRoute.Patch()
    read(@TypedBody() readUserDto: IReadUserDto) {
        return this.userService.read(readUserDto);
    }

    @TypedRoute.Put()
    update(@TypedBody() updateUserDto: IUpdateUserDto) {
        return this.userService.update(updateUserDto);
    }

    @TypedRoute.Delete()
    delete(@TypedBody() deleteUserDto: IDeleteUserDto) {
        return this.userService.delete(deleteUserDto);
    }
}
