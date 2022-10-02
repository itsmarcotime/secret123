const { Restaurant, Menu} = require('../models')

const resolvers = {
    Query: {
        menus: async () => {
            return Menu.find().sort({ createdAt: -1 });
        }
    }
};

module.exports = resolvers; 