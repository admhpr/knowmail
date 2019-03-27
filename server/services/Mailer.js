const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

class Mailer extends helper.Mail {
    constructor({
        subject,
        recipients
    }, content) {
        super();

        this.sendGridApi = sendgrid(process.env.SENDGRID_KEY)
        this.from_email = new helper.Email('no-reply@knowmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }


    formatAddresses(recipients) {
        return recipients.map(({
            email
        }) => new helper.Email(email))
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalise = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalise.addTo(recipient);
        })

        this.addPersonalization(personalise);
    }

    async send() {
        const request = this.sendGridApi.emptyRequest({
            method: POST,
            path: 'v3/mail/send',
            body: this.toJSON(),
        })

        const response = this.sendGridApi.API(request);
        return response;
    }
}

module.exports = Mailer;