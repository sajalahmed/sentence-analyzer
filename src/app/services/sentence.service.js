const SentenceRepository = require('../repositories/sentence.repository');

const SentenceService = {
    getSentence: async (sentenceId) => {
        return SentenceRepository.getById(sentenceId);
    },
    createSentence: async (userId, data) => {
        const sentenceData = { userId, data };
        return SentenceRepository.create(sentenceData);
    },
    updateSentence: async(sentenceId, data) => {
        const sentenceData = { data };
        return SentenceRepository.update(sentenceId, sentenceData);  
    },
    deleteSentence: async(sentenceId) => {
        return SentenceRepository.delete(sentenceId);
    }
}

module.exports =  SentenceService;
