const busConfig = require('../bus-config/bus-config');

getBusData = (req, res) => {

    var userRequest = {
        source: req.body.source,
        destination: req.body.destination,
        ddate: req.body.ddate
    }

    busConfig.providerConfig(userRequest).then((Detail)=>{
        Detail = Detail[0].detail
        res.send({Detail});});
    
    // res.send("Detail");

}



module.exports = {
    getBusData,
}