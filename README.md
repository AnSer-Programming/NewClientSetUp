# NewClientSetUp

## Purpose

This web portal will give the clients a way to submit on boarding paper work directly to fresh desk in a typed format. This form will have required fields that will cause the client to need to send us fully filled out information. <br>
Example, if the client marks the radial for "Send me an email", the form will not be able to be submitted until after the client enters a VALID email address.

## Tools

* Front-End 
  * Bootstrap
  * HTML, JS, CSS
* Back-End
  * NodeJS
  * ExpressJS
* Email
  * Node-Mailer
    * Email to Client
    * Email to FreshDesk, Allen, Katie, Byron
  * Set-Up as a NoReply address
    * If the client replies we will either send an automated message "Please email Byron for Client Relations or Customer Support if you need further support."
    * Or all emails from the clients to the no-reply will go to freshdesk
* DataBase
  * MsSQL
* CryptoJS
  * All Data will be Encrypted and Hashed before being saved in the database
* Hosting
  * Hosted on Azure
  * Ubuntu Server

## Design

The web site will have a client page and a client set up page. The client set up page will create a unique url that the client will be able to use in order to be able to work on their information confidentially.