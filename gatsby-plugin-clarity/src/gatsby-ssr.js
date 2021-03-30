import React from "react";

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  let enabledOnDev = pluginOptions.enable_on_dev_env === false ? false : true;
  if (!pluginOptions.clarity_project_id) return;
  if (enabledOnDev || process.env.NODE_ENV === `production`) {
    return setHeadComponents([
      <script
        key={`gatsby-plugin-clarity`}
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=gatsby";
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${pluginOptions.clarity_project_id}");
        `,
        }}
      />,
    ]);
  }

  return null;
};
