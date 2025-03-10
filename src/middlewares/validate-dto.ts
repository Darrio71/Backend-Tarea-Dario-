import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export const validateDto = (DtoClass: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const instance = plainToInstance(DtoClass, req.body);
        const errors = await validate(instance);
        if (errors.length > 0) {
             res.status(400).json({
                success: false,
                statusCode: 400,
                errors: errors.map(err => ({
                    property: err.property,
                    constraints: err.constraints,
                })),
            });
            return;
        }
        next();
    };
};
