"use strict";

module.exports = function(sequelize, DataTypes) {
  var Trainer = sequelize.define("trainer", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //the model association name refers to the title of the table not the variable name
        Trainer.hasMany(models.pokemon)
      }
    }
  });
  return Trainer;
};

