const express = require('express');
const { 
    getWordsCount, 
    getCharactersCount, 
    getSentencesCount, 
    getParagraphsCount, 
    getLongestWord 
} = require('../app/controllers/analyze.controller');

const router = express.Router();

router.post('/word-count', getWordsCount);
router.post('/character-count', getCharactersCount);
router.post('/sentence-count', getSentencesCount);
router.post('/paragraph-count', getParagraphsCount);
router.post('/longest-word', getLongestWord);

module.exports = router;
