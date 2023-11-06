/*
 * File: base-entity.ts
 * File Created: 2023-09-21 08:27:40
 * Author: Val Liu <valuis0429@gmail.com>
 *
 * -----
 * Last Modified: 2023-11-06 02:36:37
 * Modified By: Val Liu
 * -----
 */

/// Utility Type
export type Normalize<T> = Omit<T, "">;
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
export type ScalarTypes = string | number | boolean | Date;
export type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends ScalarTypes ? T[P] : RecursivePartial<T[P]>;
};

/// Base Type
export interface IEntityPrimaryKey {
    id: string | number;
}

export interface IEntityDateInfo {
    createdAt: Date;
    updatedAt: Date;
}

export type IBaseEntity = IEntityPrimaryKey & IEntityDateInfo;

/// Conversion Type
export type BeEntity<T> = IEntityPrimaryKey & T & IEntityDateInfo;

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

/// CRUD Type
export type ReadDto<T extends GeneralDelegateMeta> = IInputPaging<
    Parameters<T["findMany"]>[0]
>;
export type ReadOutput<T extends GeneralDelegateMeta> = IOutputResults<
    GeneralOutput<T, true>
> &
    IOutputPaging &
    Pick<ReadDto<T>, "orderBy">;

export type CreateDto<T extends GeneralDelegateMeta> = OmitDataFields<
    Parameters<T["create"]>[0],
    keyof IBaseEntity
>;
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

type PlainTypeOutput<T extends GeneralDelegateMeta> =
    keyof T extends keyof GeneralDelegateMeta
        ? { [index: string]: any }
        : GeneralOutput<T>;
export type CreateOutput<T extends GeneralDelegateMeta> = PlainTypeOutput<T>;
export type UpdateDto<T extends GeneralDelegateMeta> = OmitDataFields<
    Parameters<T["update"]>[0],
    keyof IBaseEntity
>;
export type UpdateOutput<T extends GeneralDelegateMeta> = PlainTypeOutput<T>;
export type DeleteDto<T extends GeneralDelegateMeta> = OmitDataFields<
    Parameters<T["delete"]>[0],
    keyof IBaseEntity
>;
export type DeleteOutput<T extends GeneralDelegateMeta> = PlainTypeOutput<T>;

/// Private CRUD Type Helper

/// Paging Type
interface IInputPagingUnit {
    page?: number;
    pageSize?: number;
}
interface IInputFetchingUnit {
    take?: number;
    skip?: number;
}
// export type IInputPagingBase = IInputPagingUnit | IInputFetchingUnit;
interface IOutputPagingUnit {
    total: number;
    totalPages: number;
}
interface IOutputFetchingUnit {
    total: number;
}

/// Input Type
export type IInputPaging<T> = T & {
    paging?: IInputPagingUnit | IInputFetchingUnit;
};

/// Output Type
export interface IOutputResults<T> {
    results: T[];
}
export type IOutputPaging = {
    //paging: IOutputPagingUnit | IOutputFetchingUnit;
    paging:
        | (IInputPagingUnit & IOutputPagingUnit)
        | (IInputFetchingUnit & IOutputFetchingUnit);
};
