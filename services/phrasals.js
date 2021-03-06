const Phrasal = require('../models/Phrasal')

module.exports = {
    getRandom: async () => {
        const count = await Phrasal.countDocuments()
        const randomNum = Math.floor(Math.random() * count)
        const randomItems = await Phrasal.find().skip(randomNum).limit(1)
        return randomItems[0]
    },

    getAll: async () => {
        const items = Phrasal.find({})
        return items
    },

    createPhrasal: async (newPhrasal) => {
        const phrasal = new Phrasal(newPhrasal)
        await phrasal.save()
        return phrasal
    },

    updatePhrasal: async (id, newPhrasal) => {
        await Phrasal.findOneAndUpdate({ _id: id }, newPhrasal)
        return newPhrasal
    },

    deletePhrasal: async (id) => {
        await Phrasal.findOneAndDelete({ _id: id })
    }
}