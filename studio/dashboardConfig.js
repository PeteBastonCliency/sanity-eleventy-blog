export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60202d85a96f4c79e617c5d8',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4zczzpze',
                  apiId: '1c85812d-2d16-44a8-9be5-78f99a3794a6'
                },
                {
                  buildHookId: '60202d85b9896f30234c3f2d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-631gpbov',
                  apiId: 'c3024906-7734-4ac7-90c1-f0ff4634d6f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeteBastonCliency/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-631gpbov.netlify.app', category: 'apps'}
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
