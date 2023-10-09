const express = require('express');
const route = express.Router();

const companyController = require('../Controllers/company.controller');

route.post('/addCompany', companyController.addCompany);
route.get('/getAll', companyController.getAll);
route.get('/getById/:id', companyController.getById);
route.delete('/delete/:id', companyController.delete);
route.put('/update/:id', companyController.update);
module.exports = route;