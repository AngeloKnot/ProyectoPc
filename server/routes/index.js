const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    // View model - al objeto (title: express)
    res.render('index', {
        title: 'Express',
        author: 'Adolfo Angel Lopez Martinez',
    });
});

module.exports = router;