/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wypozyczeniaLog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    barcode: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'wypozyczeniaLog'
  });
};
