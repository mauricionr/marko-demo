const request = require('request')
const config = require('../../config')

module.exports = () => {
    return new Promise((resolve, reject) => {
        request.get(config.categories, (error, response, body) => {
            setTimeout(() => {
                resolve(JSON.parse(body));
            }, 5000)
        })
    })
}