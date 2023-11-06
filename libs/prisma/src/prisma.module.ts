/*
 * File: prisma.module.ts
 * File Created: 2023-09-26 01:07:15
 * Author: Val Liu <valuis0429@gmail.com>
 *
 * -----
 * Last Modified: 2023-11-06 07:32:34
 * Modified By: Val Liu
 * -----
 */

import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

export const PRISMA_INJECTION_TOKEN = Symbol("PrismaService");

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
