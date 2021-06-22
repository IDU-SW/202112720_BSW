const express = require('express');
const router = express.Router();
const {exhibitionController} = require('../controller/Controller');

router.get('/exhibition', exhibitionController.showExhibitionList);

router.post('/exhibition/', exhibitionController.addExhibition);

router.get('/exhibition/:id', exhibitionController.showExhibitionDetail);
router.put('/exhibition/:id', exhibitionController.editExhibition);
router.delete('/exhibition/:id', exhibitionController.deleteExhibition);

module.exports = router;