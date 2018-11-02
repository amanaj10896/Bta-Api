const axios = require('axios');
var providerHandler={};
var detail;

providerHandler.goibibo = async function (userRequest,busAggregator) {
    url = `${busAggregator.url}app_id=${busAggregator.appId}&app_key=${busAggregator.appKey}&format=json&source=${userRequest.source}&destination=${userRequest.destination}&dateofdeparture=${userRequest.ddate}`;
    console.log(url);
    await axios.get(url).then((response)=>{
        detail = response.data.data.onwardflights;
        
});
return(detail);
}

aggregator = async (userRequest , busAggName , busAggregator)=>{
    
await providerHandler[busAggName](userRequest,busAggregator).then((response)=>{
    detail = response;
});
// console.log(detail);
// console.log(detail);
return detail;
}


module.exports={
    aggregator
}