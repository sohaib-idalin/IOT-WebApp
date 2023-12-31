const express = require('express');
const router = express.Router();
const VisitorController = require('../controllers/visitorcontroller');
const Auth = require('../middlewares/auth');


const authMiddleware=new Auth();
const visitorController=new VisitorController()

router.use(authMiddleware.authentificate)

router.get('/',visitorController.getAll)
router.get('/:id',visitorController.getById)
router.post('/',visitorController.create)
router.put('/:id',visitorController.update)
router.delete('/:id',visitorController.delete)



module.exports = router;