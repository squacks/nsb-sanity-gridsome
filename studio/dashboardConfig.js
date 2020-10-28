export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5f99e2bf7931480144141575',
                  title: 'Sanity Studio',
                  name: 'nsb-sanity-gridsome-studio',
                  apiId: '2462bfaa-bbb9-4d32-af6a-399d14c084e5'
                },
                {
                  buildHookId: '5f99e2bf79314800eb1418aa',
                  title: 'Blog Website',
                  name: 'nsb-sanity-gridsome',
                  apiId: 'b0d4fa80-0246-4544-ad6a-a8ee9ae52adc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/squacks/nsb-sanity-gridsome',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nsb-sanity-gridsome.netlify.app', category: 'apps'}
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
