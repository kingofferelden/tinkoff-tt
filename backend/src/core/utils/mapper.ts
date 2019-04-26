import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";

export class Mapper {
    public static toClass<T>(classType: ClassType<any>, value: T): T {
        return plainToClass(classType, JSON.parse(JSON.stringify(value))) as any as T;
    }
}
