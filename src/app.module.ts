/*
 * File: app.module.ts
 * File Created: 2023-09-21 08:12:46
 * Author: Val Liu (valuis0429@gmail.com)
 *
 * -----
 * Last Modified: 2023-09-27 12:23:19
 * Modified By: Val Liu
 * -----
 */

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "@app/user";
import { APP_FILTER } from "@nestjs/core";
import { TypiaTypeErrorFilter } from "core/filters/typia-type-error.filter";
import { GenericErrorFilter } from "core/filters/generic-error.filter";
import { AppHostModule } from "@app/app-host";
import { SwaggerModule } from "@app/swagger";
import { ConfigModule } from "@nestjs/config";
//import { PrismaModule } from "@app/prisma";

@Module({
    imports: [
        /// Core Modules
        AppHostModule,
        ConfigModule.forRoot({ isGlobal: true }),
        // PrismaModule,
        SwaggerModule,
        /// Custom Modules
        UserModule,
    ],
    controllers: [AppController],
    providers: [
        AppService,
        { provide: APP_FILTER, useClass: GenericErrorFilter },
        { provide: APP_FILTER, useClass: TypiaTypeErrorFilter },
    ],
})
export class AppModule {}
