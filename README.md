# lambda-serverless-simple-micro-service


This example is based upon the example template inside this node-lambda package https://www.npmjs.com/package/node-lambda.


The aim of this repo and effort is to understand and uncover the workings of using serverless. There are many layers of technology used to create even the most simple mircoservice, you may find that you can jump ahead and find a template, or like myself, find a sea of solutions and feel unsure as to what is the best solution. 


In this persuit, please feel free to message me and share your ideas, learnings.


## Learnings from creating this repo:


The core construct of Lambda at its entry point consists of a function.
exports.handler = function (event, context, callback) {}


event - This parameter should consist of the data coming in to the function such as, API Method, Parameters. The API Gateway has a template that can unravel the incoming request into the event format (see event.json for a clear example of how your request will be recieved by Lambda).


context - The context object recieved contains information about the lambda function. It appears to have one method, getRemainingTimeInMillis() and other useful data such as evn type and data usage.


callback - in many examples this has been removed from the initial construct, which suggests the use of a callback is not widely used as best practice. I'll update this as I find out more about the behaviours of Lambda as a tool for serving your awesome microservice or API.

## Stranger things...


The templating system seems a bit odd. Like some kind of Java templating system, rather than an elegant way of being able to pull out code with JS which would provide more control to a developer. This with regards to how you can transfer the data from a request back into the function itself. Let's see, maybe its amazing - even though looks so rigid and confusing from the outside.

## Usage 

See the commands available in the package json, to test locally, build and deploy. 


### Resources used to build this demo:


https://www.npmjs.com/package/node-lambda
https://kennbrodhagen.net/2015/12/06/how-to-create-a-request-object-for-your-lambda-event-from-api-gateway/
https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html
https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-code.html#services-apigateway-code-nodejs
https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-lambda.html
