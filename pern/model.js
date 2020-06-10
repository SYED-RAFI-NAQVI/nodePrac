export const Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
User.sync({ force: true }).then(() => {
    // Table created
    return User.create({
        description: 'this the first todo'
    });
});
