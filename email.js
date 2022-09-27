const nodemailer = require("nodemailer");

const EMAIL_FROM = "jjtest@abc.com";

const MAILTRAP_HOST = "smtp.mailtrap.io";
const MAILTRAP_PORT = "2525";

class MailClient {
  constructor(host, port) {
    this.transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: false,
      auth: {
        user: "ca430249d1d3d9",
        pass: "2e88326bafd6c7",
      },
    });
  }

  /**
   *
   * @param {string} sendTo
   * @param {string} subject
   * @param {string} message
   */
  sendPlainText(sendTo, subject, message) {
    const options = {
      from: EMAIL_FROM,
      to: sendTo,
      subject: subject,
      text: message,
    };

    this.transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err.message);
      } else {
        console.log(info);
      }
    });
  }
}

module.exports = new MailClient(MAILTRAP_HOST, MAILTRAP_PORT);
