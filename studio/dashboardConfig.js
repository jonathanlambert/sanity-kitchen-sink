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
                  buildHookId: '615f53ffb0408f7e0017bd69',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gwi2ava5',
                  apiId: '5f9fd6ce-de42-4840-b104-4ae2de87a6a3'
                },
                {
                  buildHookId: '615f5400c9918f7f68a775d3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-h4ghkmci',
                  apiId: '7238c12a-058b-4a85-a477-d02a167b5b40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonathanlambert/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-h4ghkmci.netlify.app', category: 'apps'}
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
