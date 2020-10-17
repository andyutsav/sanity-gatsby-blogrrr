export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f8b25a92ff940261fabeabb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blogrrr-studio',
                  apiId: 'b445d337-9708-4d1b-bdc5-87be0d445461'
                },
                {
                  buildHookId: '5f8b25a9324f6511a3fc391c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blogrrr',
                  apiId: '4c6184d6-f1ad-4184-90a1-45ad221ec812'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyutsav/sanity-gatsby-blogrrr',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blogrrr.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
