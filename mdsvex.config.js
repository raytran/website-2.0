const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },
  layout: {
    blog: 'src/components/ProjectPage.svelte',
    _: 'src/components/Card.svelte'
  },
  "remarkPlugins": [],
  "rehypePlugins": []
};

export default config;