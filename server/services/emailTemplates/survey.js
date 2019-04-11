const getParams = require('../../utils/helper').getParams
console.log(getParams().redirectDomain)
module.exports = survey => {
    return `
        <html>
        <body>
            <div style="text-align: center">
                <h3> We'd like your input! </h3>
                <p>Please answer the following</p>
                <p>${survey.body}</p>
                <hr/> 
                <div>
                <a href = ${getParams().redirectDomain}> Yes </a>
                </div>
                <div>
                    <a href=${getParams().redirectDomain}> No
                    </a>
                </div>
            </div>
        </body>
        </html>
    `;
};