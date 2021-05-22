const express = require('express');
const router = express.Router(); 

// import the controller file for fcuntions
const animalController = require('../Controllers/AnimalController');

// use 
router.get('/animal', animalController.baseRoute);

// create
router.post('/create', animalController.createAnimal);

// read all
router.get('/getAnimals', animalController.getAnimals);

// read one
router.get('/getAnimal/:id', animalController.getSingleAnimal);

// update
router.put('/:id/update', animalController.updateAnimal);

// delete
router.delete('/delete/:id', animalController.deleteAnimal);

module.exports = router;