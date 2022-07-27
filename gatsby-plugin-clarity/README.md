# gatsby-plugin-clarity

<a href="https://clarity.microsoft.com">Microsoft Clarity</a> is a free user behavior analytics tool developed by Microsoft that helps you understand how users are interacting with your website through session replays and heatmaps.

## Install

`npm install gatsby-plugin-clarity`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-clarity`,
      options: {
        // String value for your clarity project id
        // Project id is found in your clarity dashboard url
        // https://clarity.microsoft.com/projects/view/{clarity_project_id}/
        clarity_project_id: YOUR_PROJECT_ID,
        // Boolean value for enabling clarity while developing
        // true will enable clarity tracking code on both development and production environments
        // false will enable clarity tracking code on production environment only
        enable_on_dev_env: true,
      },
    },
  ],
};
```
