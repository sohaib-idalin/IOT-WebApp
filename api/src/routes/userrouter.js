const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');
const Auth = require('../middlewares/auth');


const authMiddleware=new Auth();
const userController=new UserController()

router.get('/',userController.getAll)
router.get('/:id',userController.getById)
router.post('/',userController.create)
router.put('/:id',userController.update)
router.delete('/:id',authMiddleware.authentificate,userController.delete)

router.post('/login',userController.login)
router.post('/getnewtoken',userController.getNewToken)



module.exports = router;