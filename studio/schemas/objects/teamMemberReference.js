export default {
  name: 'teamMemberReference',
  type: 'object',
  title: 'Team Member reference',
  fields: [
    {
      name: 'teamMember',
      type: 'reference',
      to: [
        {
          type: 'teamMember'
        }
      ]
    }
  ],
  preview: {
    select: {
      memberName: 'teamMember.name',
      media: 'teamMember.image.asset',
      role: 'teamMember.roles'
    },
    prepare (data) {
      return {
        ...data,
        title: data.memberName,
        subtitle: data.roles && data.roles.join('/'),
        media: data.image
      }
    }
  }
}
