exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    clarity_project_id: Joi.string()
      .description(
        `[string] defines clarity project ID, The plugin will not work without it.`
      )
      .required(),
    enable_on_dev_env: Joi.boolean()
      .default(true)
      .description(
        `[boolean] define whether to inject clarity tracking code on developing environment, defaults to true`
      ),
  });
};
