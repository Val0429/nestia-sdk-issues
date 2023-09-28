/*
 * File: user.service.ts
 * File Created: 2023-09-21 08:13:06
 * Author: Val Liu (valuis0429@gmail.com)
 *
 * -----
 * Last Modified: 2023-09-27 12:25:18
 * Modified By: Val Liu
 * -----
 */

import { Injectable, Optional } from "@nestjs/common";
import {
    BeEntity,
    CreateDto,
    DeleteDto,
    ReadDto,
    UpdateDto,
} from "core/types/base-entity";
import { IUser } from "./entities/user.entity";
// import { PrismaService } from "@app/prisma";

export type IUserEntity = BeEntity<IUser>;
export type ICreateUserDto = CreateDto<IUser>;
export type IReadUserDto = ReadDto<IUser>;
export type IUpdateUserDto = UpdateDto<IUser>;
export type IDeleteUserDto = DeleteDto<IUser>;

@Injectable()
export class UserService {
    // constructor(@Optional() private readonly prisma: PrismaService) {
    //     console.log("is it really here?", this.prisma);
    // }

    create(createUserDto: ICreateUserDto) {
        return "create user!";
    }

    read(readUserDto: IReadUserDto) {
        return "find users!";
    }

    update(updateUserDto: IUpdateUserDto) {
        return "update user!";
    }

    delete(deleteUserDto: IDeleteUserDto) {
        return "delete user!";
    }
}
