module.exports = {
    getParams: () => {
        let params
        if (process.env.NODE_ENV === "production") {
            params = require('../config/params');
        } else {
            params = require('../config/params.dev')
        }
        return params
    }
}