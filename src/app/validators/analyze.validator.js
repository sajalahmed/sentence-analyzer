const Joi = require("joi");

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false, errors: { label: 'key', wrap: { label: false } } });

const TextSchema = Joi.object({
    text: Joi.string().required().max(200)
});

const validate = validator(TextSchema);

module.exports = { name: 'TextValidator', validate };
