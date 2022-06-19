const router = require('express').Router();

const postRoutes = require('./postRoutes');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/post', postRoutes);

module.exports = router;