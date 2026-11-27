// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://agents.datasafe.dev',
  base: '/',
  // No `markdown.gfm` (deprecated in Astro 6.4): the default `unified()` processor enables GFM, and
  // @astrojs/mdx 6 inherits it. (mdx 5.0.x did not, and .mdx tables stopped rendering.)
  integrations: [
    starlight({
      title: 'HDS — Agents',
      // Our own src/pages/404.astro: Starlight's injected 404 route looks up a `docs/404` entry and
      // warns when there is none, while a docs/404.md entry collides with the `[...slug]` route.
      disable404Route: true,
      tableOfContents: false,
      pagination: false,
      logo: {
        dark: './src/assets/hds-logo-white.svg',
        light: './src/assets/hds-logo.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'heart', label: 'Health Data Safe Foundation', href: 'https://www.healthdatasafe.org' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/healthdatasafe/site-agents' },
      ],
      sidebar: [
        {
          label: 'AI Agents & HDS',
          items: [
            { label: 'Start here', slug: 'index' },
            { label: 'Install the MCP server', slug: 'install' },
            { label: 'Connect from Claude.ai / ChatGPT', slug: 'connect-remote' },
            { label: 'Connect & permissions', slug: 'connect' },
            { label: 'Recording data right', slug: 'data' },
            { label: 'Building apps (hds-lib)', slug: 'build' },
            { label: 'Partner services (easy-connect)', slug: 'partner-services' },
            { label: 'Feedback & issues', slug: 'feedback' },
          ],
        },
        {
          label: 'Raw (for agents)',
          items: [
            { label: 'llms.txt', link: '/llms.txt', attrs: { target: '_blank' } },
            { label: 'bootstrap.txt', link: '/bootstrap.txt', attrs: { target: '_blank' } },
            { label: 'llms-full.txt', link: '/llms-full.txt', attrs: { target: '_blank' } },
          ],
        },
        {
          label: 'More HDS',
          items: [
            { label: 'Developer docs (dev-site)', link: 'https://docs.datasafe.dev', attrs: { target: '_blank' } },
            { label: 'Data model browser', link: 'https://model-browser.datasafe.dev', attrs: { target: '_blank' } },
          ],
        },
      ],
      customCss: ['./src/styles/hds.css'],
    }),
  ],
});
