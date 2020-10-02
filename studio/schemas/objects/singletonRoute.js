import { MdLink } from 'react-icons/lib/md'

export default {
  name: 'teamRoute',
  type: 'object',
  title: 'Team page route',
  icon: MdLink,
  fieldsets: [
    {
      title: 'Visibility',
      name: 'visibility',
      options: { collapsable: true, collapsed: true }
    }
  ],
  fields: [
    {
      title: 'Use site title?',
      description:
        'Use the site settings title as page title instead of the title on the referenced page',
      name: 'useSiteTitle',
      type: 'boolean'
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      description: 'These values populate meta tags',
      type: 'openGraph'
    },
    {
      title: 'Include in sitemap',
      description: 'For search engines. Will be generateed to /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean',
      fieldset: 'visibility'
    },
    {
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines like google',
      name: 'disallowRobots',
      type: 'boolean',
      fieldset: 'visibility'
    }

    // {
    //   name: 'campaign',
    //   type: 'string',
    //   title: 'Campaign',
    //   description: 'UTM for campaings'
    // }
  ]
}
