const express = require('express');
const { 
    getSentence,
    createSentence, 
    updateSentence, 
    deleteSentence, 
} = require('../app/controllers/sentence.controller');

const router = express.Router();

router.get("/:id", getSentence);
router.post('/create', createSentence);
router.put('/update/:id', updateSentence);
router.delete('/delete/:id', deleteSentence);

module.exports = router;
