const getParams = require('../../utils/helper').getParams

module.exports = survey => {
    return `
        <html>
        <body>
            <div style="text-align: center">
                <h3> We'd like your input! </h3>
                <p>Please answer the following</p>
                <p>${survey.body}</p>
                <div>
                <a href = ${getParams().redirectDomain}/api/surveys/${survey.id}/yes> Yes </a>
                </div>
                <div>
                    <a href=${getParams().redirectDomain}/api/surveys/${survey.id}/no> No
                    </a>
                </div>
            </div>
        </body>
        </html>
    `;
};