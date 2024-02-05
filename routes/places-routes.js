const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://www.planetware.com/photos-large/USNY/empire-state-building.jpg',
        address: '20 W 34th St, New York, NY 10118',
        location: {lat: 40.748817, lng: -73.985428},
        creator: 'u1'
    }
];
router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });
    console.log('GET request in places');
    res.json({place});
});


module.exports = router;
