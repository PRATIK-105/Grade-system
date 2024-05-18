const express= require('express');
const viewController= require('../controllers/viewController')

const router= express.Router();

router.get('/login', viewController.getLoginForm);
router.get('/question-paper', viewController.getQPForm);
router.route('/grade-question-paper').post(viewController.getGradeQPForm).get(viewController.getGradeQPForm1)
// router.post('/grade-question-paper', viewController.getGradeQPForm);


module.exports= router;
