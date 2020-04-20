function postedBy(parent, args, context) {
  return context.prisma.project({ id: parent.id }).postedBy()
}



module.exports = {
  postedBy,

}