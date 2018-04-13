const resolverMap = {
  Query: {
    exampleQuery(obj, args, context) {
      return { exampleName: args.exampleName, example: "Example!" };
    }
  }
}

module.exports = resolverMap;
