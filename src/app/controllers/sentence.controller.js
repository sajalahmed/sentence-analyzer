const SentenceService = require('../services/sentence.service');
const SentenceValidator = require('../validators/sentence.validator');
const {ResponseCode}  = require('../constant/code.constant');

const SenetenceController = {
  getSentence: async (req, res, next) => {
    const sentenceId = req.params.id;
    try {
      const sentence = await SentenceService.getSentence(sentenceId);
      if (!sentence) {
        return res.status(ResponseCode.HTTP_NOT_FOUND).json({ error: 'Sentence not found' });
      }
      res.status(ResponseCode.HTTP_OK).json(sentence);
    } catch (error) {
      res.status(ResponseCode.HTTP_INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  },
  createSentence: async (req, res, next) => {
    const { error } = SentenceValidator.validate(req.body);
    if (error) {
      return next(error);
    }
    const { userId, data } = req.body;
    try {
      const sentence = await SentenceService.createSentence(userId, data);
      res.status(ResponseCode.HTTP_CREATED).json(sentence);
    } catch (error) {
      res.status(ResponseCode.HTTP_INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  },
  updateSentence: async (req, res, next) => {
    const { error } = SentenceValidator.validate(req.body);
    if (error) {
      return next(error);
    }
    const sentenceId = req.params.id;
    const { data } = req.body;
  
    try {
      const sentence = await SentenceService.updateSentence(sentenceId, data);
      if (sentence[0] === 0) {
        return res.status(ResponseCode.HTTP_NOT_FOUND).json({ error: 'Sentence not found' });
      }
      res.status(ResponseCode.HTTP_OK).json({ message: 'Sentence updated successfully' });
    } catch (error) {
      res.status(ResponseCode.HTTP_INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  },
  deleteSentence: async (req, res, next) => {
    const sentenceId = req.params.id;
    try {
      const deleted = await SentenceService.deleteSentence(sentenceId);
      if (!deleted) {
        return res.status(ResponseCode.HTTP_NOT_FOUND).json({ error: 'Sentence not found' });
      }
      res.status(ResponseCode.HTTP_OK).json({ message: 'Sentence deleted successfully' });
    } catch (error) {
      res.status(ResponseCode.HTTP_INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
}

module.exports = SenetenceController;