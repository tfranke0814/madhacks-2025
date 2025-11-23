// Router for llm calls
const express = require('express');
const generateText = require('../services/llmService')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'llm router is operational' });
});

router.post('/textgen', async (req, res) => {
    const { prompt } = req.body || {};
    if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: 'Missing or invalid `prompt` in JSON body' });
    }

    try {
        const text = await generateText(prompt);
        return res.json({ text });
    } catch (err) {
        console.error('LLM service error:', err);
        return res.status(502).json({ error: err.message || 'LLM error' });
    }
});

module.exports = router;