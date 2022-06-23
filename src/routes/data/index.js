const express = require('express');
const router = express.Router();
const controller = require('./controller')


router.get(
  '/vip',
  
  controller.vip
);
router.get(
  '/binance',
  
  controller.binance
)
router.get(
  '/recovery',
  
  controller.recovery
)


module.exports = router