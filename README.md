# AlpineTester
---
A test harness for Alpine devices.

AlpineTester.js takes 2 arguments
The first is the path to the testfile you want to execute.
The second is the numerical digits of the usbmodem port you want to listen to.
Example:  npm start pulse/photo 14121


Remember to include the client JavaScript code to the app, and pull in the socket.io dependency from the CDN
i.e. paste this:
<script src='https://cdn.socket.io/socket.io-1.4.5.js'></script>
