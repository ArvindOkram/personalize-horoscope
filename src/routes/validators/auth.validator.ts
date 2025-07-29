import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.email': 'Invalid email format!',
            'any.required': 'Email is required!',
            'string.empty': 'Email cannot be empty!'
        }),
        password: Joi.string().min(6).required().messages({
            'string.min': 'Password must be at least 6 characters long!',
            'any.required': 'Password is required!',
            'string.empty': 'Password cannot be empty!'
        })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: false, error: error.details[0].message });
    }

    next();
};

export const logoutValidator = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.email': 'Invalid email format!',
            'any.required': 'Email is required!',
            'string.empty': 'Email cannot be empty!',
        }),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: false, error: error.details[0].message });
    }

    next();
};

export const signUpValidator = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required().messages({
            'any.required': 'Name is required!',
            'string.empty': 'Name cannot be empty!',
        }),
        email: Joi.string().email().required().messages({
            'string.email': 'Invalid email format!',
            'any.required': 'Email is required!',
            'string.empty': 'Email cannot be empty!'
        }),
        password: Joi.string().min(6).required().messages({
            'string.min': 'Password must be at least 6 characters long!',
            'any.required': 'Password is required!',
            'string.empty': 'Password cannot be empty!'
        }),
        birthDate: Joi.string()
            .pattern(/^\d{2}-\d{2}-\d{4}$/) // Matches DD-MM-YYYY
            .required()
            .messages({
                'string.pattern.base': 'birthDate must be in DD-MM-YYYY format!',
                'any.required': 'birthDate is required!',
                'string.empty': 'birthDate cannot be empty!'
            })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: false, error: error.details[0].message });
    }

    next();
};
