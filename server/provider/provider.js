const axios = require('axios');
var providerHandler={};
var detail;

providerHandler.goibibo = async function (userRequest,busAggregator) {
    url = `${busAggregator.url}app_id=${busAggregator.appId}&app_key=${busAggregator.appKey}&format=json&source=${userRequest.source}&destination=${userRequest.destination}&dateofdeparture=${userRequest.ddate}`;
    console.log(url);
    const response = await axios.get(url);
    detail = response.data.data.onwardflights.map((bus) => {
        return {
            origin: bus['origin'],
            BusServiceID: bus['BusServiceID'],
            rating: bus['rating'],
            departureTime: bus['DepartureTime'],
            duration: bus['duration'],
            avlWindowSeats: bus['avlWindowSeats'],
            seat: bus['seat'],
            busCondition: bus['busCondition'],
            arrdate: bus['arrdate'],
            destination: bus['destination'],
            amenities: bus['amenities'],
            ArrivalTime: bus['ArrivalTime'],
            gps: bus['gps'],
            depdate: bus['depdate'],
            BusType: bus['BusType'],
            TravelsName: bus['TravelsName'],
            fare: bus['fare'].totalfare,
            seatType: bus.RouteSeatTypeDetail.list[0].seatType,
            SeatsAvailable: bus.RouteSeatTypeDetail.list[0].SeatsAvailable,
            RouteID: bus['RouteID'],
            src_vid: bus['src_voyager_id'],
            dest_vid: bus['dest_voyager_id'],
            src_id: bus['src_vendor_id'],
            dest_id: bus['dst_vendor_id'],
            Operator_id: bus['OperatorID'],
            Aggregator: "Goibibo",
            Filter_busType: (bus.BusType.split(" "))[0],
            departureHour: parseInt((bus.DepartureTime.split(":"))[0]),

        };
    });
        

return{detail};
}

aggregator = async (userRequest , busAggName , busAggregator)=>{
    
 const detail =await providerHandler[busAggName](userRequest,busAggregator);

// console.log(detail);
// console.log(detail);
return detail;
}


module.exports={
    aggregator
}