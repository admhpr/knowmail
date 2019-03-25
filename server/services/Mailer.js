const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

class Mailer extends helper.Mail {
    constructor({
        subject,
        recipients
    }, content) {
        super();

        this.from_email = new helper.Email('no-reply@knowmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients)
    }


    formatAddresses(recipients) {
        return recipients.map(({
            email
        }) => new helper.Email(email))
    }
}

module.exports = Mailer;