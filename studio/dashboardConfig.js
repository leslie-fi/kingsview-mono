export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6b8c658a56100087504603',
                  title: 'Sanity Studio',
                  name: 'kingsview-mono-studio',
                  apiId: '35300c0e-76d4-4e0a-8c9b-ad1a43adc4c4'
                },
                {
                  buildHookId: '5f6b8c65358340011a73d0ab',
                  title: 'Blog Website',
                  name: 'kingsview-mono',
                  apiId: 'b3820c70-d205-4290-b5f7-e812529a5a74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leslie-fi/kingsview-mono',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kingsview-mono.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
