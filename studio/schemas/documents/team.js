export default {
  type: 'document',
  name: 'teamPage',
  title: 'TeamPage',
  fieldsets: [
  
    {
      title: 'MetaData',
      name: 'teamRoute',
      options: { collapsable: true, collapsed: true }
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      description: 'This is the website path the page will accessible on',
      title: 'Path',
      validation: Rule =>
        Rule.required().custom(slug => {
          if (slug && slug.current && slug.current === '/') {
            return 'Cannot be /'
          }
          return true
        })
    },
 {
   name: 'teamRoute',
   type: 'teamRoute',
   fieldset: 'teamRoute'
 },
    {
      name: 'navMenu',
      type: 'reference',
      title: 'Navigation menu',
      // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
      to: [{ type: 'navigationMenu' }],
      description: 'Which nav menu should be shown, if any',
    },

    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'pricing' },
        { type: 'uiComponentRef' },
        { type: 'hero' },
        { type: 'infoRows' },
        { type: 'ctaColumns' },
        { type: 'ctaPlug' },
        { type: 'team' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'slug.current',
      subtitle: 'teamPage.title'
    },
    prepare({ title, subtitle }) {
      return {
        title: ['/', title].join(''),
        subtitle
      }
    }
  }
}
