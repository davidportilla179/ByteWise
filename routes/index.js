var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to adoptapet api');
});

router.use('/students', require('./students'));

module.exports = router;