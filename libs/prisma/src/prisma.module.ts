/*
 * File: prisma.module.ts
 * File Created: 2023-09-26 01:07:15
 * Author: Val Liu <valuis0429@gmail.com>
 *
 * -----
 * Last Modified: 2023-09-27 09:09:05
 * Modified By: Val Liu
 * -----
 */

import { DynamicModule, Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

export const PRISMA_INJECTION_TOKEN = "PrismaService";

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
