const express = require('express');
const restRouter = express.Router();
const DepartmentRoute = require('./DepartmentRoute.js');
const CellRoute = require('./CellRoute.js');

restRouter.use('/department',DepartmentRoute);
restRouter.use('/cell',CellRoute);

module.exports = restRouter;