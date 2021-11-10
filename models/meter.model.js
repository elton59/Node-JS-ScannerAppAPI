const conn = require('../util/database');
module.exports =
     class Model {

        constructor (MeterCode, imei, ZoneId, Longitude = null, Latitude = null,FirstName,LastName,AccountNumber,DateInstalled=null,Id)
        {
        this.AccountNumber=AccountNumber;
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Metercode = MeterCode;
        this.imei = imei;
        this.Longitude = Longitude;
        this.Latitude = Latitude; 
        this.ZoneId = ZoneId;
        this.DateInstalled=DateInstalled;
        this.Id=Id;
         }
         // retun Meter
         static findMeterfModel(meterCodeFn, callback){
            conn.query("SELECT * from Metersdata WHERE meterCode = ? ", meterCodeFn , async (err, results) => {
                if (err) {
                    console.log (`There was trouble executing the sql, error :${ err }`);
                    callback ({error: "Internal server error"});
                    return;
                }else{
                 

                    if (!results.length > 0) {
                        callback (null, { message: false });
                    }else{
                        callback ( results);
                    }
                    
                }
               
            });
        }
        // retun Meter Scanner
        static findMetersModel(imeiFn, callback){
            conn.query("SELECT * from Metersdata WHERE imei = ? ", imeiFn , async (err, results) => {
                if (err) {
                    console.log (`There was trouble executing the sql, error :${ err }`);
                    callback ({error: "Internal server error"});
                    return;
                }else{
                 

                    if (!results.length > 0) {
                        callback (null, { message: false });
                    }else{
                        callback ( results);
                    }
                    
                }
               
            });
        }
// find Meter
    static findMeterModel(meterCodeF, callback){
        conn.query("SELECT * from Metersdata WHERE meterCode = ? ", meterCodeF , async (err, results) => {
            if (err) {
                console.log (`There was trouble executing the sql, error :${ err }`);
                callback ({error: "Internal server error"}, null);
            }else{
                if (!results.length > 0) {
                    callback (null, { message: false });
                }else{
                    callback (null, { message: true });
                }
                
            }
        });
    }
    //find Imei Scanner
    static findMeterModelScanner(imeiF, callback){
        conn.query("SELECT * from Metersdata WHERE imei = ?", imeiF , async (err, results) => {
            if (err) {
                console.log (`There was trouble executing the sql, error :${ err }`);
                callback ({error: "Internal server error"}, null);
            }else{
                if (!results.length > 0) {
                    callback (null, { message: false });
                }else{
                    callback (null, { message: true });
                }
                
            }
        });
    }
    
 /*//update Meters
static async updateMeterModel(meterUpdateArr, callback){
    if (!meterUpdateArr) {
        callback (null, { error: "body cannot be blank" });
        console.log(meterUpdateArr);    
        return;
    }else{

        conn.query("UPDATE customersdetails SET FirstName=?,LastName=?,AccountNumber=? WHERE Id = ?", [ meterUpdateArr.params.FirstName,meterUpdateArr.params.LastName,meterUpdateArr.params.accountnumbermeterUpdateArr.params.customerId] , (err, results) => {
       
            if (err) {
                callback ({error: err}, null);
                console.log(err);
            }else{
                callback (null, { message: "customerdetail Updated successfully"});

        conn.query("UPDATE Meters SET Longitude = ?, Latitude = ?,imei=?,metercode=? WHERE Id = ?", [ meterUpdateArr.params.Longitude, meterUpdateArr.params.Latitude,meterUpdateArr.params.imei,meterUpdateArr.params.metercode,meterUpdateArr.params.Id] , (err, results) => {
       
            if (err) {
                callback ({error: err}, null);
                console.log(err);
            }else{
                callback (null, { message: "meters Updated successfully"});
                }
        });
                }
        });


    }
}

 */   

//update meters without customer account
static async updateMeterModel(meterUpdateArr, callback){
    if (!meterUpdateArr) {
        callback (null, { error: "body cannot be blank" });
        console.log(meterUpdateArr);    
        return;
    }else{
        conn.query("UPDATE Metersdata SET Longitude = ?, Latitude = ?,imei=? where imei=?", [ meterUpdateArr.params.Longitude, meterUpdateArr.params.Latitude,meterUpdateArr.params.imei] , (err, results) => {
       
            if (err) {
                callback ({error: err}, null);
                console.log(err);
            }else{
                callback (null, { message: "Updated successfully"});
                }
        });
    }
}




//addmeters
static addMeterDetailsModel(meterArr, callback) {
                 conn.query("INSERT INTO userprofile (FirstName,LastName) VALUES(?,?)", [meterArr.FirstName,meterArr.LastName,meterArr.AccountNumber], (err, results) => {
                if (err) {
                    console.log(err);
                    callback ({error: "Internal server error"}, null);
                }
    else
    {
        conn.query("INSERT INTO meters (MeterCode, imei, ZoneId,Longitude,Latitude,DateInstalled) VALUES(?,?,?,?,?,?)", [meterArr.MeterCode, meterArr.imei,meterArr.ZoneId,meterArr.Longitude,meterArr.Latitude,meterArr.DateInstalled], (err, results) => {
                if (err) {
                    console.log(err);
                    callback ({error: "Internal server error"}, null);
                }
    else{   conn.query("INSERT INTO customeraccount(AccountNumber) VALUES(?)", [meterArr.AccountNumber], (err, results) => {
                    if (err) {
                        console.log(err);
                        callback ({error: "Internal server error"}, null);
                    }

else{
                    callback(null, { message: "Onboarded Sucessfully"});
                }
            });
            //  callback(null, { message: "Account added successfully!"});
            }
        });
                   // callback(null, { message: "user profile record added successfully!"});
                }
            });

}  
    static checkImeiModel(imei, callback){
        conn.query("SELECT * FROM Meters WHERE imei = ?", imei, (err, results) => {
            if (err) {
                callback(err, null);
            }else{
                if (results.length > 0) { 
                    console.log(results[0]);
                    callback(null, { message: true}); 
                } else {     
                    callback(null, { message: false});
                }
            }
        });
    }

    static checkMeterCodeZoneModel(reqBody, callback){
        conn.query("SELECT ZoneId FROM meters WHERE MeterCode = ?", reqBody.MeterCode, (err, results) => {
            if (err) {
                callback(err, null);
            }else{
                if (results.length > 0) {
                    if (reqBody.ZoneId && results[0].ZoneId == reqBody.ZoneId) {
                        callback(null, { message : true });
                    } else {
                       callback({ error: "Metercode found but ZoneId does not match our databases" }, null); 
                    }
                } else {     
                    callback(null, { message: false});
                }
            }
        });
    }
}