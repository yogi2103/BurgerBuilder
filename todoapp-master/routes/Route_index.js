const express=require('express');
const router= express.Router();
const homeController=require('../controllers/home_controller');     //For getting further pages from the desired folder

//To check if this router is working or not
console.log('Router loaded!')

//For request of homepage
router.get('/',homeController.home);

//For adding task
router.use('/add-task',homeController.Addtask);

//For deleting task
router.use('/delete-task',homeController.Deletetask);

//For finding task
router.use('/find-task',homeController.Findtask);

//for updating the task
router.post('/update/:id',homeController.update);

//For exporting this router
module.exports=router;