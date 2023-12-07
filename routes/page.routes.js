const Router = require('express')
const router = new Router();
const pageController = require('../controllers/page.controllers');

router.get('/', pageController.mainPage);

module.exports = router