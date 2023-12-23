const express = require("express");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Pages Path
const PagesPath = path.join(__dirname, "Pages");

// Pages Content
const indexPage = fs.readFileSync(path.join(PagesPath, "index.html"), "utf8");
const programsPage = fs.readFileSync(path.join(PagesPath, "programs.html"), "utf8");
const blogsPage = fs.readFileSync(path.join(PagesPath, "blogs.html"), "utf8");
const contactPage = fs.readFileSync(path.join(PagesPath, "contact.html"), "utf8");
const aboutPage = fs.readFileSync(path.join(PagesPath, "about.html"), "utf8");

// Static Files
app.use(express.static('./Public'));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/GoodMorningDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Creating the Schema for the contact form
const contactSchema = new mongoose.Schema({
   name: String,
   email: String,
   number: Number,
   textarea: String
});

// Creating the Schema
const Contact = mongoose.model('Contact', contactSchema);


// Routes
app.get("/", (req, res) => {
 res.send(indexPage);
});

app.get("/programs", (req, res) => {
 res.send(programsPage);
});

app.get("/blogs", (req, res) => {
 res.send(blogsPage);
});

app.get("/contact", (req, res) => {
 res.send(contactPage);
});

app.post('/submit', async (req, res) => {
   const contact = new Contact(req.body);
   try {
       await contact.save();
       sendEmail(req.body);
       res.send('Successfully saved!');
   } catch (err) {
       res.status(400).send(err);
   }
});

app.get("/about", (req, res) => {
 res.send(aboutPage);
});


// Sending Email to the User
const sendEmail = async (contact) => {
   let transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: 'your-gmail@gmail.com',
           pass: 'your-password'
       }
   });

   let mailOptions = {
       from: 'your-gmail@gmail.com',
       to: contact.email,
       subject: 'Good Morning: Thanks For Contacting Us!',
       text: `Hi ${contact.name},

       Thank you for contacting Good Morning! We truly appreciate you reaching out to us.
       
       As soon as we review your message, we will get back to you promptly.
       
       Thank you for choosing Good Morning. We look forward to serving you and providing you with exceptional coding tutorials and resources.
       
       Best Regards, Learn Code Hack Founder, Good Morning!!!\n 
       Email: your-gmail@gmail.com\n
       Phone Number your-phone-number`
   };

   await transporter.sendMail(mailOptions);
};

// Server Listening
app.listen(3000, () => {
 console.log("Server started on port 3000");
});