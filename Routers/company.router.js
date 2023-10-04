const express = require('express');
const route = express.Router();

const companyController = require('../Controllers/company.controller');

route.post('/addCompany', companyController.addCopmany )


module.exports = route