var {
    BusAggregator
} = require('../models/bus-aggregator');
var {
    mongoose
} = require('../db/mongoose');
var provider = require('../provider/provider');

var Details=[];

 providerConfig=async (userRequest)=> {
    

    
    
     await BusAggregator.find().then((busAggregators) => {
       busAggregators.forEach(busAggregator => {
        aggregator = busAggregator.busAggName;
        detail = provider.aggregator(userRequest,aggregator);
        Details.push(detail)
        
        
       });
      
   })
   

//    console.log(Details);
   return(Details);
    
}


module.exports={
    providerConfig
    
}