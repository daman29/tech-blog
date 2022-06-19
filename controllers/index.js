const router = require('express').Router();

const postRoutes = require('./postRoutes');
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/index');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/post', postRoutes);

module.exports = router;