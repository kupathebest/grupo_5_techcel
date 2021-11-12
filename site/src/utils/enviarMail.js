const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID = "795912979446-h6388m8n6l1olfke4ckls83hcnmjj0ik.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URI = "https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "1//048NibUcWt0tHCgYIARAAGAQSNwF-L9IrY5VTuojUE8zwIVQ9b4vBokfSgXiA6WOhekjAum3RU2Xn_8Prn-HVQM3SwjEFpMPBq5k"

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail(from, destiny, subject, contentHtml) {
    try {
        const accesToken = await oAuth2Client.getAccessToken()
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "contacto.techcel@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accesToken: accesToken
            },
        })

        const mailOptions = {
            from,
            to: destiny,
            subject,
            html: contentHtml
        }

        const result = await transporter.sendMail(mailOptions)
        return result

    } catch (error) {
        console.log(error)
    }
}

module.exports = sendMail