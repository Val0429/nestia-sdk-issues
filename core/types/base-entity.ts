/*
 * File: base-entity.ts
 * File Created: 2023-09-21 08:27:40
 * Author: Val Liu <valuis0429@gmail.com>
 *
 * -----
 * Last Modified: 2023-11-06 10:50:31
 * Modified By: Val Liu
 * -----
 */

/// Base Type
export interface IEntityPrimaryKey {
    id: string;
}

export interface IEntityDateInfo {
    createdAt: Date;
    updatedAt: Date;
}

export type IBaseEntity = IEntityPrimaryKey & IEntityDateInfo;

/// CRUD
export type CreateDto<T extends GeneralDelegateMeta> = OmitDataFields<
    Parameters<T["create"]>[0],
    keyof IBaseEntity
>;
export type ReadDto<T extends GeneralDelegateMeta> = IInputPaging<
    Parameters<T["findMany"]>[0]
>;
export type UpdateDto<T extends GeneralDelegateMeta> = OmitDataFields<
    Parameters<T["update"]>[0],
    keyof IBaseEntity
>;
export type DeleteDto<T extends GeneralDelegateMeta> = OmitDataFields<
    Parameters<T["delete"]>[0],
    keyof IBaseEntity
>;

/// Prettify
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
export type PrettifyCreateDto<
    T extends Parameters<GeneralDelegateMeta["create"]>[0],
> = Prettify<T["data"]>;
export type PrettifyReadDto<
    T extends Parameters<GeneralDelegateMeta["findMany"]>[0],
> = Prettify<T["select"]>;
export type PrettifyUpdateDto<
    T extends Parameters<GeneralDelegateMeta["update"]>[0],
> = Prettify<T["data"]>;
export type PrettifyDeleteDto<
    T extends Parameters<GeneralDelegateMeta["delete"]>[0],
> = Prettify<T["select"]>;

/// CRUD Helper
type OmitFieldsRemover<T, P extends string | number | symbol> = {
    /// select & data
    [K in keyof T]: T[K] extends infer U
        ? U extends null | undefined
            ? U
            : Omit<U, P>
        : never;
};
export type OmitFields<
    T extends Parameters<GeneralDelegateMeta["create" | "update"]>[0],
    K extends keyof T,
    P extends string | number | symbol,
> = Omit<T, K> & OmitFieldsRemover<Pick<T, K>, P>;
export type OmitDataFields<
    T extends Parameters<GeneralDelegateMeta["create" | "update"]>[0],
    P extends string | number | symbol,
> = OmitFields<T, "data", P>;

/// Public Prisma Helper
export type GeneralPayload<T extends GeneralDelegateMeta> =
    T[typeof Symbol.iterator]["types"]["payload"];

export type GeneralType<T, P extends boolean> = T extends PrismaPayload
    ? GeneralTypeUnit<T, P>
    : T extends PrismaPayload[]
    ? Array<GeneralTypeUnit<T[number], P>>
    : never;

export type GeneralOutput<
    T extends GeneralDelegateMeta,
    P extends boolean = false,
> = GeneralType<GeneralPayload<T>, P>;

/// Prisma Helper
type PrismaPayload = { scalars: object; objects: object };

type GeneralTypeUnit<
    T extends PrismaPayload,
    P extends boolean,
> = P extends true
    ? { [K in keyof T["scalars"]]?: T["scalars"][K] } & {
          [K in keyof T["objects"]]?: GeneralType<
              Exclude<T["objects"][K], null>,
              P
          >;
      }
    : { [K in keyof T["scalars"]]: T["scalars"][K] } & {
          [K in keyof T["objects"]]: GeneralType<
              Exclude<T["objects"][K], null>,
              P
          >;
      };

export type GeneralDelegateMeta = {
    [K: symbol]: {
        types: {
            payload: {
                scalars: object;
                objects: object;
            };
        };
    };
    findMany: (args: {
        select?: any;
        take?: number | undefined;
        skip?: number | undefined;
        orderBy?: any;
    }) => any;
    create: (args: { select?: any; data?: any }) => any;
    update: (args: { select?: any; data?: any }) => any;
    delete: (args: { select?: any; data?: any }) => any;
};

/// Input Type
export type IInputPaging<T> = T & {
    paging?: IInputPagingUnit;
};
/// Paging Type
interface IInputPagingUnit {
    page?: number;
    pageSize?: number;
}
