const resolverMap = {
  Query: {
    exampleQuery(obj, args, context) {
      console.log(obj, args, context);
    }
  }
}

module.exports = resolverMap;
