const Joi = require("joi");

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false, errors: { label: 'key', wrap: { label: false } } });

const SentenceSchema = Joi.object({
    data: Joi.string().required().max(200),
    userId: Joi.number().required()
});

const validate = validator(SentenceSchema);

module.exports = { name: 'SentenceValidator', validate };