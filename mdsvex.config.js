const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },
  layout: {
    blog: 'src/lib/ProjectPage.svelte',
    _: 'src/lib/Card.svelte'
  },
  "remarkPlugins": [],
  "rehypePlugins": []
};

export default config;
