/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'date'
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'id',
      primaryKey: 'true'
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'name'
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'surname'
    },
    sciezka: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      field: 'sciezka'
    }
  }, {
    tableName: 'inside'
  })

  return Customer
}
