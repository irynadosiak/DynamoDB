var 
    AWS = require("aws-sdk"),                       
    DDB = new AWS.DynamoDB({
        apiVersion: "2012-08-10",
        region: "us-east-1"
    });                                              

(function createADataBaseTable(){
    var 
        params = {
            AttributeDefinitions: [{
                AttributeName: "dragon_name", 
                AttributeType: "S"
            }], 
            KeySchema: [{
                AttributeName: "dragon_name", 
                KeyType: "HASH"
            }],
            BillingMode: "PAY_PER_REQUEST",
            TableName: "dragons"
        };
     DDB.createTable(params, function(err, data){
         console.log(err, data);             
     });
})();
