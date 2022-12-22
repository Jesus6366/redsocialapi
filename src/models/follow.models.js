const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')

const Follows = db.define('follows', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: 'Follower',
        field: 'follower',
        references: {
            key: 'id',
            model: Users
        }
    },
    userId2: {
        type: DataTypes.UUID,
        allowNull: false,
        comment: 'Followed',
        field: 'followed',
        references: {
            key: 'id',
            model: Users
        },
    },

})

module.exports = Follows