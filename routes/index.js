var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('Welcome to Byte Wise api');
});

router.use('/students', require('./students'));
router.use('/teachers', require('./teachers'));
router.use('/courses', require('./courses'));

module.exports = router;