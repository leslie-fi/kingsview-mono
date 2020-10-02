import {MdPerson} from 'react-icons/lib/md'
export default {
  name: 'teamMember',
  type: 'document',
  title: 'Team Member',
  icon: MdPerson,
  fields: [
    {
      name: 'order',
      title: 'order',
      type: 'number'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule =>
        Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule =>
        Rule.required()
    },
    // {
    //   name: 'phone',
    //   title: 'Phone',
    //   type: 'string',
    //   validation: Rule =>
    //     Rule.required()
    // },
    {
      name: 'nmls',
      title: 'NMLS#',
      type: 'number'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      options: {
        hotspot: true
      },
      validation: Rule =>
        Rule.required()
    },
    {
      name: 'bio',
      type: 'simpleBlockContent',
      title: 'Biography'
    },
    {
      title: 'Roles',
      name: 'roles',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'radio',
        list: [
          { title: 'CEO/Owner', value: 'CEO/Owner' },
          { title: 'Developer', value: 'Developer' },
          { title: 'MLS Agent', value: 'MLS Agent' },
          { title: 'Real Estate Agent', value: 'Real Estate Agent' }
        ],
        validation: Rule =>
        Rule.required()
      }
    },
  ],
      orderings: [
        {
          name: 'sorted',
          title: 'By order number',
          by: [
            {
              field: 'order',
              direction: 'asc'
            }
          ]
        }
      ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
