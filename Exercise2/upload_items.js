var
    AWS = require("aws-sdk"),
    DDB = new AWS.DynamoDB({
        apiVersion: "2012-08-10",
        region: "us-east-1"
    });

(function uploadItemstoDynamoDB(){
    var
        dragon_1 = {
            Item:{
                "dragon_name":{
                    S: "sparky"
                },
                "dragon_type":{
                    S: "green"
                },	
                "description":{
                    S: "breaths acid"
                },
                "attack":{
                    N: "10"
                },
                "defense":{
                    N: "7" 
                }
            },
            ReturnConsumedCapacity: "TOTAL",
            TableName: "dragons"
        };
     DDB.putItem(dragon_1, function(err, data){
         console.log(err, data);
     });
     var
        dragon_2 = {
            Item:{
                "dragon_name":{
                    S: "tallie"
                },
                "dragon_type":{
                    S: "red"
                },
                "description":{
                    S: "breaths fire"
                },
                "attack":{
                    N: "7"
                },
                "defense":{
                    N: "10"
                } 
            },
            ReturnConsumedCapacity: "TOTAL",
            TableName: "dragons"
        };
     DDB.putItem(dragon_2, function(err, data){
         console.log(err, data);
     });
})();
