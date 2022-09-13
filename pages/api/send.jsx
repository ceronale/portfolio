import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  if (req.method == "POST") {
    const { name, email, message, subject } = req.body
    const msg = {
      to: "alexander.ceron16@gmail.com",
      from: "alexander.ceron16@gmail.com",
      subject: `${subject}`,
      text: `Email ${email}`,
      html: `<h3>From: ${email}</h3>
      <p>${message}</p> `
    }
    try {
      await sgMail.send(msg)
      res.status(200).json({ success: true })
    } catch (error) {
      res.status(200).json({ success: false })
    }
  }
}

