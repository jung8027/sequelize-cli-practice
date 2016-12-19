var app = require('express')()
var db = require('./models')

db.sequelize.sync()
.then(()=>{
	console.log('listening to port 3000')
	app.listen(3000)
})