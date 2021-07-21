const Department = require('../model/Department');
const DepartmentService = require('../service/department.service.js');

const DepartmentController = {
    getDepartments: async (req,res)=> {
        try {
            const departments = await Department.find();
            if(!departments) return res.status(404).json({error:"Department not found"})
            return res.status(200).json({
                status:200,
                message:"successfully processed",
                data:departments
            })
        } catch (error) {
            console.log(error)
            return res.status(500).send(error);
        }

    },
    getDepartmentById: async (req,res)=> {
        try {
            const department = await Department.findById(req.params.id)
        } catch (error) {
            
        }

    },
    addDepartment: async (req,res)=> {

    }
}

module.exports = DepartmentController;