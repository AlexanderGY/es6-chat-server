import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express ES2017' });
});

module.exports = router;
