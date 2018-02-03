/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserRentLog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    imie: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nazwisko: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'UserRentLog'
  });
};
