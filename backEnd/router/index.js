const express = require('express');
const router = express.Router();
const adminControler = require('../controller/index');

router.get('/postProject',adminControler.addProject);
router.post('/project',adminControler.Projects);


module.exports=router;