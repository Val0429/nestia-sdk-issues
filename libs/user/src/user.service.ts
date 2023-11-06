/*
 * File: user.service.ts
 * File Created: 2023-09-21 08:13:06
 * Author: Val Liu (valuis0429@gmail.com)
 *
 * -----
 * Last Modified: 2023-11-06 10:48:56
 * Modified By: Val Liu
 * -----
 */

import { Injectable, Optional } from "@nestjs/common";
import {
    CreateDto,
    DeleteDto,
    GeneralOutput,
    PrettifyCreateDto,
    PrettifyDeleteDto,
    PrettifyReadDto,
    PrettifyUpdateDto,
    ReadDto,
    UpdateDto,
} from "core/types/base-entity";
import { Prisma } from "@prisma/client";

export type IUser = Output;

export type ICreateUserDto = CreateDto<Delegate>;
type IPrettifyCreateUserDto = PrettifyCreateDto<ICreateUserDto>;
export type IReadUserDto = ReadDto<Delegate>;
type IPrettifyReadUserDto = PrettifyReadDto<IReadUserDto>;
export type IUpdateUserDto = UpdateDto<Delegate>;
type IPrettifyUpdateUserDto = PrettifyUpdateDto<IUpdateUserDto>;
export type IDeleteUserDto = DeleteDto<Delegate>;
type IPrettifyDeleteUserDto = PrettifyDeleteDto<IDeleteUserDto>;

/// private helper: Prisma payload definition
type Delegate = Prisma.UserDelegate;
type Output = GeneralOutput<Delegate>;

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
