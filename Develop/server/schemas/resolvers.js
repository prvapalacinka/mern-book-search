const { Book, User } = require ('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        Book: async () => {
          return Book.find({});
        },
        matchups: async (parent, { _id }) => {
          const params = _id ? { _id } : {};
          return User.find(params);
        },
      },

      Mutation: {
        addUser: async (parent, args) => {
        const user = await User.create( args );
        const token = signToken(user);
        return { token, user };
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
        },
        saveBook: async (parent, args, context) => {

        },
        removeBook: async (parent, {bookId}, context) => {

        }
      }
};

module.exports = resolvers;
