const {ParkingUser} = require('../models');
const BaseController = require('./basecontroller');


class ParkingUserController extends BaseController {
    constructor() {
        super(ParkingUser)
    }

    getPermissions=async (req,res)=>{
        const parkingUserId = req.params.id;
        try {
            const parkingUser = await ParkingUser.findByPk(parkingUserId);
            if (!parkingUser) {
              return res.status(404).json({message:'item not found'});
            }
            const permissions = await parkingUser.getPermissions()
            console.log(permissions);
            return res.json(permissions);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    addPermission = async (req,res)=>{
        const parkingUserId = req.params.id;
        const {permissionId}=req.body
        if(!permissionId) return res.status(500).json({error:'permissionId is required'});
        try {
            
            const parkingUser = await ParkingUser.findByPk(parkingUserId);
            if (!parkingUser) {
                return res.status(404).json({message:'item not found'});
            }
            if(await parkingUser.hasPermission(permissionId)) return res.status(500).json({error:'already existe'})

            await parkingUser.addPermission(permissionId)
            await parkingUser.reload()
            return res.status(201).json(parkingUser);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    removePermission= async (req,res)=>{
        const parkingUserId = req.params.id;
        const {permissionId}=req.body
        if(!permissionId) return res.status(500).json({error:'permissionId is required'});
        try {
            const parkingUser = await ParkingUser.findByPk(parkingUserId);
            if (!parkingUser) {
                return res.status(404).json({message:'item not found'});
            }
            if(!await parkingUser.hasPermission(permissionId)) return res.status(500).json({error:'this Permission doesnt existe for this user'})

            await cours.removePermission(permissionId)

            return res.sendStatus(204);

        } catch (error) {
            return res.status(500).json(error);
        }

    } 

    removeAllPermissions= async (req,res)=>{
        const parkingUserId = req.params.id;
        try {
            const parkingUser = await ParkingUser.findByPk(parkingUserId);
            if (!parkingUser) {
                return res.status(404).json({message:'item not found'});
            }
            await parkingUser.setPermissions([])
            
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
      
}

module.exports = ParkingUserController;