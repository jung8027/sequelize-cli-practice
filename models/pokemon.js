"use strict"

module.exports = function(sequelize, DataTypes){
	var Pokemon = sequelize.define('pokemon', {
		pokemon: DataTypes.STRING
	}, {
    classMethods: {
      associate: function(models) {
      	//the model association name refers to the title of the table not the variable name
        Pokemon.belongsTo(models.trainer)
      }
    }
  });
	return Pokemon;
}