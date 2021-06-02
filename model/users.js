const User = require('./schemas/users')

const findById = async (contactId) => {
    return User.findOne({_id:contactId})
}

const findByEmail = async (email) => {
    return await User.findOne({email})
}

const create = async (userOptions) => {
    const user = new User(userOptions)
    return await user.save()
}

const updateToken = async (contactId, token) => {
    return await User.updateOne({_id:contactId},{token})
}

module.exports = {
    findById,
    findByEmail,
    create,
    updateToken
}