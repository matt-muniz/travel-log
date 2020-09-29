const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello 🌎',
  });
});

router.get('/g', (req, res) => {
  res.json({
    message: 'Goodnight 🌎',
  });
});

module.exports = router;
