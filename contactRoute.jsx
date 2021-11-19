const router = require("express").Router();
const nodemailer = require("nodemailer")

router.post('/contact',(req,res) => {
    let data = req.body 
    // Backend Validations if Name, email, or message is empty, send an error
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({msg: "Please fill all the fields"})
    }
        let transporter = nodemailer.createTransport ({
            service: "Gmail",
            // Port 465 is the default port to use if 'is secure' is true 
            // via Nodemailer.com/smtp documentation
            port: 465,
            auth: {
                user: "GilesProjectWeek@gmail.com",
                pass: "Projectweek1"
            }
        })
        let emailStructure = {
            from: data.email,
            to: "GilesProjectWeek@gmail.com",
            subject:`Messsage from ${data.name}`,
            html: `
            <h3>Information</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p>
            `
        }

        transporter.sendMail(emailStructure, (error) => {
            try {
                if(error) return res.status(400).json({msg: "Please fill all the fields"})
                res.status(200).json({msg: "Thank you for contacting Giles"})
            } catch (error) {
                if(error)return res.status(500).json({msg: "There is a server error"})
            }
        })
    
})

module.exports = router;