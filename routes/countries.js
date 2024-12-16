const express = require('express');
const router = express.Router();
const data = require('../data/countries.json'); // Assuming the countries data is in this file

// Route to get all countries
router.get('/', (req, res) => {
    res.status(200).json(data.countries); // Send all countries
});

// Route to get a specific country by ID
router.get('/:countryId', (req, res) => {
    const requestedCountryId = req.params.countryId; // The ID from the URL
    const country = data.countries.find(countryInData => {
        return countryInData.id.toString() === requestedCountryId; // Find the country by ID
    });

    // If country is found, return it, otherwise return a 404
    if (country) {
        res.status(200).json(country); // Send the country data
    } else {
        res.status(404).json({ error: `Country with ID ${requestedCountryId} not found.` }); // Error if not found
    }
});

module.exports = router;
