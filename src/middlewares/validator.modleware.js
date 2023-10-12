import { Schema } from "zod";

export const validateSchema = (schema) => ( req, res, next ) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        console.log( error )
    };
}