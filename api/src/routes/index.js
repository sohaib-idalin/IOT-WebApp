const express = require('express');
const indexrouter = express.Router();

const userRouter=require('./userrouter')
const employeeRouter=require('./employeerouter')
const visitorRouter=require('./visitorrouter')
const vehicleRouter=require('./vehiclerouter')


indexrouter.use('/users',userRouter)
indexrouter.use('/employees',employeeRouter)
indexrouter.use('/visitors',visitorRouter)
indexrouter.use('/vehicles',vehicleRouter)



module.exports = indexrouter;