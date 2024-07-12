const textService = require('../services/analyze.service');
const TextValidator = require('../validators/analyze.validator');

const TextController = {
  getWordsCount: async (req, res, next) => {
    const { error } = TextValidator.validate(req.body);
    if (error) {
      return next(error);
    }
    const count = textService.countWords(req.body.text);
    res.json({count})
  },
  getCharactersCount: async (req, res, next) => {
        const { error } = TextValidator.validate(req.body);
    if (error) {
      return next(error);
    }
    const count = textService.countCharacters(req.body.text);
    res.json({count})
  },
  getSentencesCount: async (req, res, next) => {
    const count = textService.countSentences(req.body.text);
    res.json({ count });
  },
  getParagraphsCount: async (req, res, next) => {
    const count = textService.countParagraphs(req.body.text);
    res.json({ count });
  },
  getLongestWord: async (req, res, next) => {
    const longestWord = textService.findLongestWord(req.body.text);
    res.json({ longestWord });
  }
}

module.exports = TextController;