const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
    },
    {
        sequelize,
        modelName: 'user',
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        hooks: {
            beforeCreate(user) {
                user.password = bcrypt.hash(user.password, 10);
                return user;
            },
            beforeUpdate(user) {
                user.password = bcrypt.hash(user.password, 10);
                return user;
            }
        }
    }
);

module.exports = User;