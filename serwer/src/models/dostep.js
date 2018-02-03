/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('dostep', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    imie: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nazwisko: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sciezka: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rfidnumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Check_RFID: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    Check_Finger: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    Check_Face: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'dostep'
  })
}
