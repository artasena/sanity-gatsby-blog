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
                  buildHookId: '5e5ddf8e120760f7cf9b2cd2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gf5s1qxc',
                  apiId: 'bccc8071-fc47-4c4c-b0fc-719fdf7915f6'
                },
                {
                  buildHookId: '5e5ddf8eafc11cd217af208d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-a2nwghtb',
                  apiId: 'd197851d-d63d-43f9-b5a3-17f2b9d7e75d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/artasena/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-a2nwghtb.netlify.com', category: 'apps' }
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
