/*
 * File: nestia-type-error.filter.ts
 * File Created: 2023-09-21 03:42:10
 * Author: Val Liu <valuis0429@gmail.com>
 *
 * -----
 * Last Modified: 2023-09-25 02:00:51
 * Modified By: Val Liu
 * -----
 */

import { ArgumentsHost, Catch, HttpException } from "@nestjs/common";
import { Response } from "express";
import { BaseExceptionFilter } from "@nestjs/core";

@Catch(HttpException)
export class GenericErrorFilter extends BaseExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const statusCode = exception.getStatus();

        /// transform the HttpException to general format!
        const o: any = exception.getResponse();
        const message = o.message;
        /// Val: todo, logging
        console.assert(message != undefined, "message should not be null");
        delete o.message;

        if (message != undefined) {
            /// handle message not exist
            response.status(statusCode).json({
                statusCode,
                message,
                errors: Array.isArray(o) ? o : [o],
            });
        } else {
            /// fallback to default
            super.catch(exception, host);
        }
    }
}

// @Catch(BadRequestException)
// export class NestiaTypeErrorFilter extends BaseExceptionFilter {
//     catch(exception: BadRequestException, host: ArgumentsHost) {
//         const ctx = host.switchToHttp();
//         const response = ctx.getResponse<Response>();
//         const statusCode = exception.getStatus();

//         /// rewrite to unity the error message. { statusCode, message, errors }
//         const o: any = exception.getResponse();
//         if (o.path && o.reason && o.expected) {
//             response.status(statusCode).json({
//                 statusCode,
//                 message: o.message,
//                 errors: [{ ...o, message: undefined }],
//             });
//         } else {
//             super.catch(exception, host);
//         }
//     }
// }
