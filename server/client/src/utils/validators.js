const emailRe =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const validateEmails = (emails) => {
    const invalidEmails = emails
        .split(",")
        .map(email => email.trim())
        .filter(email => emailRe.test(email) === false)
    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`
    }
    return;
}