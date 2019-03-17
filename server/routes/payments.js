const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        const {
            body
        } = req;
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'credit purchase',
            source: body.id,
        })


    })
}