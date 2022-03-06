exports.handler = function(event, context, callback){ 
   console.log("To run a Local test in Cloud 9 use `node scan_dragons.js test`");
   console.log("running in Lambda");
   scanTable(callback);
};

var 
    AWS = require("aws-sdk"),                            
    DDB = new AWS.DynamoDB({
        apiVersion: "2012-08-10",
        region: "us-east-1"
    });                                                   

function scanTable(cb){
     var 
        params = {
            TableName: "dragons"
        };
     DDB.scan(params, function(err, data){
         if(err){
             throw err;
         }
         cb(null, data.Items); 
     });
}

if(process.argv[2] === "test"){
    console.log("Local test for all dragons");
    scanTable(console.log);
}
