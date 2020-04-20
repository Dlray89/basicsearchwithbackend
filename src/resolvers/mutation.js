function post(parent, { name, description }, context) {
 
  return context.prisma.createProject({
    name,
    description,

  })
}

module.exports = {
    post
}