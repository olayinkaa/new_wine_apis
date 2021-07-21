const express = require('express');
const DepartmentController = require('../controller/DepartmentController.js');
// const auth = require('../middlewares/auth.js');

const Router = express.Router();

/**
 * @route GET api/newwine/department
 * @desc GET all department in the unit
 */
Router.get('/',DepartmentController.getDepartments);
/**
 * @route GET api/newwine/department/20
 * @desc Get department by ID
 */
Router.get('/:id',DepartmentController.getDepartmentById)

module.exports = Router;