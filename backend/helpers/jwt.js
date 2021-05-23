const expressJwt = require('express-jwt');

function authJwt(){
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\/api\/vi\/products(.*)/ , methods:[ 'GET', 'OPTIONS']},
            {url: /\/api\/vi\/categories(.*)/ , methods:[ 'GET', 'OPTIONS']},
            `${api}/v1/login`,
            `${api}/v1/register`
        ]
    })
}

async function isRevoked(req, payload, done) {
    if (!payload.isAdmin){
        done(null,true)
    }

    done();
}

module.exports = authJwt;