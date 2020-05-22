var AWS = require('aws-sdk');
/**
 * Provide an event that contains the following keys:
 *   - operation: one of the operations in the switch statement below
 *   - payload: a parameter to pass to the operation being performed
 *   - see event.json for the standard input format of how the data will be recieved by
 *     the lambda function (via API standard template JSON). 
 */
exports.handler = function (event, context, callback) {
  var operation = event.method;
  console.log(operation);
  var payload = event.payload;
  switch (operation) {
    case 'CREATE':
      console.log('create using payload: ', payload);
      break;
    default:
      callback('Unknown operation: ${operation}');
  }
};
