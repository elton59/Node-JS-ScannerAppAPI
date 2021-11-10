const Meter = require ('../models/meter.model');

//this is responsible for registering a Meter to the database
exports.addMeterDetails = (req, res) => {
    console.log(req.body);
    //check whether the req body is empty or not before proceeding
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send( { error: "Please fill in all the fields" } );
        return; 
    }
     else {
        //make sure none of the important fields are blank
        if (req.body.MeterCode != "" && req.body.imei != "" && req.body.ZoneId != "")
         {
                
                                    let MeterArr = new Meter(req.body.params.MeterCode,req.body.params.imei,req.body.params.ZoneId,req.body.params.Longitude,req.body.params.Latitude,req.body.params.FirstName,req.body.params.LastName,req.body.params.AccountNumber,req.body.params.DateInstalled);
                                    Meter.addMeterDetailsModel(MeterArr, (err, results) => {
                                        if (err) {
                                            if(err.code == "ER_BAD_NULL_ERROR"){
                                                res.status(500).send({ error: "Internal server error"}); 
                                            }
                                            res.status(500).send({ error: "Error inserting values in the database"});
                                          
                                        }
                                        else{
                                             //no error
        
                                            res.send(results);
                                        }        
                                    });   
                              }                         
                             else if (err) {
                        res.status(500).send({error: err});
                    }
              
                

                
         
        else {
            res.status(400).send({message: "Please make sure you have not submitted empty data"});
        }

    }
}
//return meter details
exports.returnMeterDetails = (req, res) => {
    //check whether the req body is empty or not before proceeding
    if (req.query.constructor === Object && Object.keys(req.query).length === 0) {
        res.status(400).send( { error: "Please fill in all the fields" } );
        return; 
    }
     else {
        //make sure none of the important fields are blank
        if (req.query.MeterCode != "")
         {
                //check whether the meter exists: if yes then abort the add request
                Meter.findMeterfModel(req.query.MeterCode , async (err, results) => {
                    
                    if (results) {                        
                        if (results.message==true) {
                            res.send({ res: "Metercodeexist" });                           
                        }
                       
                                    
                           else if (results.message==false) {
                                res.send({ res: "MetercodeNotFound" });                           
                            }
                      
                    } else if (err) {
                        res.send( err);
                    }
                });          
        } 
        else {
            res.status(400).send({message: "Please make sure you have not submitted empty data"});
        }

    }
}
//return meter details Scanner
exports.returnMeterDetailsScanner = (req, res) => {
    //check whether the req body is empty or not before proceeding
    if (req.query.constructor === Object && Object.keys(req.query).length === 0) {
        res.status(400).send( { error: "Please fill in all the fields" } );
        return; 
    }
     else {
        //make sure none of the important fields are blank
        if (req.query.imei != "")
         {
                //check whether the meter exists: if yes then abort the add request
                Meter.findMetersModel(req.query.imei , async (err, results) => {
                       
                    if (results) {                        
                        if (results.message==true) {
                            res.send({ res: "imeiexist" });                           
                        }
                       
                                    
                           else if (results.message==false) {
                                res.send({ res: "imeiNotFound Please Contact Your Admin" });                           
                            }
                      
                    } else if (err) {
                        res.send( err);
                    }
                });          
        } 
        else {
            res.status(400).send({message: "Please make sure you have not submitted empty data"});
        }

    }
}
//search meter
exports.searchMeterDetails = (req, res) => {
    //check whether the req body is empty or not before proceeding
    if (req.query.constructor === Object && Object.keys(req.query).length === 0) {
        res.status(400).send( { error: "Please fill in all the fields" } );
        return; 
    }
     else {
        //make sure none of the important fields are blank
        if (req.query.MeterCode != "")
         {
                //check whether the meter exists: if yes then abort the add request
                Meter.findMeterModel(req.query.MeterCode , async (err, results) => {
                    console.log("results",results);
                    //
                    //console.log("stored",message);
                    if (results) {                        
                        if (results.message==true) {
                            
                            res.send({ res: "Metercodeexist" });                           
                        }
                       
                                    
                           else if (!results.message) {
                                res.send({ res: "MetercodeNotFound" });                           
                            }
                      
                    } else if (err) {
                        res.status(500).send({error: err});
                    }
                });          
        } 
        else {
            res.status(400).send({message: "Please make sure you have not submitted empty data"});
        }

    }
}
//searching imei
exports.searchMeterDetailsScanner = (req, res) => {
    //check whether the req body is empty or not before proceeding
    if (req.query.constructor === Object && Object.keys(req.query).length === 0) {
        res.status(400).send( { error: "Please fill in all the fields" } );
        return; 
    }
     else {
        //make sure none of the important fields are blank
        if (req.body.imei != "")
         {
                //check whether the meter exists: if yes then abort the add request
                Meter.findMeterModelScanner(req.query.imei , async (err, results) => {
                   console.log(results);
                    if (results) {                        
                        if (results.message) {
                            res.send({ res: "Imeiexist" });                           
                        }
                                    
                           else if (!results.message) {
                                res.send({ res: "ImeiNotFound" });                           
                            }
                      
                    } else if (err) {
                        res.status(500).send({error: err});
                    }
                });          
        } 
        else {
            res.status(400).send({message: "Please make sure you have not submitted empty data"});
        }

    }
}

//this is for updating Longitude and latitudes manually
exports.updateMeterModel = (req, res) => {
    
    //check whether the Meter has not submited an empty body request
    if (req.body.constructor ===Object && Object.keys(req.body).length === 0) {
        res.status(400).send( { message: "Please fill in all the fields" } );
        return; 
    }
  
                //proceed with the update as the request body matches the database
                Meter.updateMeterModel(req.body, async (errR, resultsS) => {
                    if (errR) {
                        res.status(500).send({ error: errR.error });
                    }else{
                   
                        res.send(resultsS);
                    }        
                }); 
                       
        }
    
    //actual update 
    //this is for updating Longitude and latitudes manually
    exports.FindAMeter = (req, res) => {
        //check whether the req body is empty or not before proceeding
        if (req.query.constructor === Object && Object.keys(req.query).length === 0) {
            res.status(400).send( { error: "Please fill in all the fields" } );
            return; 
        }
         else {
            //make sure none of the important fields are blank
            if (req.query.MeterCode != "")
             {
                    //check whether the meter exists: if yes then abort the add request
                    Meter.findAMeterModel(req.query.MeterCode , async (err, results) => {
                        
                        if (results) {                        
                            if (results.message==true) {
                                console.log(results);
                                res.send(results);                           
                            }
                           
                                        
                               else if (results.message==false) {
                                    res.send({ res: "MetercodeNotFound" });                           
                                }
                          
                        } else if (err) {
                            res.status(500).send({error: err});
                        }
                    });          
            } 
            else {
                res.status(400).send({message: "Please make sure you have not submitted empty data"});
            }
    
        }
    }
    
  

