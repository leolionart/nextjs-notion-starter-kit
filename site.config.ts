import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '48f669ccff2b4e6baf5fe55aa38ca781',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Ái Trần Personal Blog',
  domain: 'aitran.naai.studio',
  author: 'Trần Quang Ái',

  // open graph metadata (optional)
  description: 'A Personal Space build by Notion',

  // social usernames (optional)
  twitter: 'quangai',
  github: 'leolionart',
  linkedin: 'leolion',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: 'https://transitivebullsh.it/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Ff70d3dc6-ce97-4be2-9cde-b86606147b41%252F06.jpg%3Ftable%3Dblock%26id%3D78fc5a4b-88d7-4b0e-824e-29407e9f1ec1%26cache%3Dv2&w=3840&q=75',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/about': 'b12d9dc2410844efb9d5867ab3032c1a',
    '/blog': '81d57e894c954536ad5b18dc9d3d2710',
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.


  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'b12d9dc2410844efb9d5867ab3032c1a'
    },
    {
      title: 'Blog',
      pageId: '81d57e894c954536ad5b18dc9d3d2710'
    }
  ]
})
