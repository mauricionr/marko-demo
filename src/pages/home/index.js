let template = require('./template.marko')

module.exports = (req, res) => {
    template.render({
       name:'Mauricio Nunes dos reis',
       colors:['red', 'green', 'blue']
   }, res)
}