const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
const Comments = require('./comments.models')
const Follow = require('./follow.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    // users - posts 
    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    // users - likes
    Users.hasMany(Likes)
    Likes.belongsTo(Users)

    // posts - likes 
    Posts.hasMany(Likes)
    Likes.belongsTo(Posts)

    //users-follows (following)
    Users.hasMany(Follow)
    Follow.belongsTo(Users, {
        as: "following",
        foreignKey: "userId2"
    })

    //users-follows (follower)
    // Users.hasMany(Follow)
    Follow.belongsTo(Users, {
        as: "followers",
        foreignKey: "userId"
    })



}

module.exports = initModels