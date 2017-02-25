let template = require('./template.marko')
const categorieService = require('../../services/categoriesService')

module.exports = (req, res) => {
    template.render({
       name:'Mauricio Nunes dos reis',
       colors:['red', 'green', 'blue'],
       promise1:categorieService(),
       promise2:categorieService()
   }, res)
}