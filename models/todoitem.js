module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    todoId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Todos',
        key: 'id',
        as: 'todoId',
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  TodoItem.associate = (models) => {
    // associations can be defined here
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};