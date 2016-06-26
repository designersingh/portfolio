/**
 * Created by tajinderpalsohi on 6/26/16.
 */
'use strict';

var config = require('../../config');
var secret = config.secret;
var jwt = require('jsonwebtoken');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(config.mandrill.apikey);


module.exports = function(app, express){
    var api = express.Router();

    api.post('/contact', function(req,res) {
        console.log('contact api called');
        console.log(req.body);

        var userObj = req.body;

        var message = {
            "subject": "Enquiry from Designersingh.com",
            "from_email": "info@designersingh.com",
            "from_name": userObj.name,
            "to": [{
                "email": "tajinderpalsohi@gmail.com",
                "name": "Upsightly",
                "type": "to"
            }],
            "important": true,
            "html":"<h2>Hi There!</h2><h2>You got an enquiry from "+ userObj.name +" on designersingh.com</h2> " +
            "<div style='background: #f1f1f1; padding:15px'>" +
            "Name: <b>" + userObj.name+"</b><br> " +
            "Email: <b>" + userObj.email +"</b><br> " +
            "Service Intested In: <b>" + userObj.service +"</b><br> " +
            "Description: <b>" + userObj.description +"</b><br> " +
            "</div>"
        };

        mandrill_client.messages.send({"message": message}, function(result) {
            console.log(result);
            res.status(200).send({success:true,message:"Email sent successfully.",result:result});
        }, function(e) {
            // Mandrill returns the error as an object with name and message keys
            console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);

            res.status(500).send({success:true,message:"Error sending email.", error:e});

            // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
        });

    });

    return api;
};