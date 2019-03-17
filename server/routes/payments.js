const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const requireLogin = ('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const {
            body
        } = req;
        try {
            const charge = await stripe.charges.create({
                amount: 500,
                currency: 'usd',
                description: 'credit purchase',
                source: body.id,
            })


            req.user.credits += 5;

            const user = await req.user.save();
            res.send(user)

        } catch (e) {
            console.log(e.message)
        }
    })
}