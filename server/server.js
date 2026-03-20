const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.post('/rsvp', (req, res) => {
    const { fornavn, etternavn, epost, kommer, antall, allergier, melding } = req.body;
    if (!fornavn || !etternavn || !epost || !kommer || !antall) return res.status(400).json({ message: 'invalid request' });


});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});