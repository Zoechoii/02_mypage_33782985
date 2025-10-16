//my page 33782985
// A simple Node.js web app

var http = require("http");
   const port = 8000;

   http.createServer(function(req, res) {
     console.log(req);
     res.writeHead(200, { "Content-Type": "text/html" });
     res.end(`
       <!DOCTYPE html>
       <html>
       <head>
         <title>My Page</title>
       </head>
       <body>
         <h1>Student no.33782985</h1>
         <h2>About Me</h2>
         <p>HeY! I am a student in Goldsmiths, University of London. </p>
         <p>I am studying BSc Creative Computing.</p>
         <p>I am interested in web development and design.</p>
         <p>I love to create interactive and user-friendly websites.</p>
         <h2>My Hobbies</h2>
         <ul>
           <li>Coding</li>
           <li>Singing</li>
           <li>Playing Video Games</li>
           <li>Making Music</li>
           <li>Cooking Korean food</li>
         </ul>

       </body>
       </html>
     `);
   }).listen(port, function() {
     console.log(`Node server is running on port ${port}...`);
   });
