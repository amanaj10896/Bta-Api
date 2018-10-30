const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/busAggregatorDetails',controller.getData);
router.post('/busAggregatorDetails',controller.addData);
  //  var ninja= new Ninja(req.body);
  //  ninja.save();
  // ye dono kaam ek e me kr dega
    // Ninja.create(req.body);
    // res.send(ninja);
router.put('/busAggregatorDetails/:name',controller.updateData);
router.delete('/busAggregatorDetails/:name',controller.deleteData);
module.exports = router;