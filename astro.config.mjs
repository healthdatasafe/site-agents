// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://agents.datasafe.dev',
  base: '/',
  integrations: [
    starlight({
      title: 'HDS — Agents',
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
            { label: 'Connect & permissions', slug: 'connect' },
            { label: 'Recording data right', slug: 'data' },
            { label: 'Building apps (hds-lib)', slug: 'build' },
            { label: 'Feedback & issues', slug: 'feedback' },
          ],
        },
        {
          label: 'Raw (for agents)',
          items: [
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
