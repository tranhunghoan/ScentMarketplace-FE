import joi, { allow } from "joi"

// export const email = joi.string().pattern(new RegExp('gmail.com$')).required()
export const username = joi.string().min(6).required()
export const password = joi.string().min(6).required()