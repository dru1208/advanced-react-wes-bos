const Mutations = {
  createDog: function(parent, args, context, info) {
    global.dogs = global.dogs || []
    const newDog = {name: args.name}
    global.dogs.push(newDog)
    return newDog
  }
};


module.exports = Mutations;
