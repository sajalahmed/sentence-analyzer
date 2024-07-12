const db = require('../models');
const {ErrorConstant} = require('../constant/error.constant');

const SentenceRepository =  {
    getById: async (id) => {
        return db.Sentence.findByPk(id);
    },
    create: async (sentenceData) => {
        return db.Sentence.create(sentenceData);
    },
    update: async (sentenceId, sentenceData)  => {
        return db.Sentence.update(sentenceData, {
            where: { id: sentenceId }
        });
    },
    delete: async (sentenceId) => {
        return db.Sentence.destroy({
            where: { id: sentenceId }
        });
    }
}

module.exports = SentenceRepository;
