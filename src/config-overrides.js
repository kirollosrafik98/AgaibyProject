const path = require('path');

module.exports = function override(config, env) {
  const sassRule = config.module.rules.find(
    rule => String(rule.test) === String(/\.scss$/)
  );
  
  const sassLoader = {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: true,
      additionalData: `@import "helpers/variables";`,
      sassOptions: {
        includePaths: [path.resolve(__dirname, 'src', 'Sass')],
      },
    },
  };
  
  sassRule.use.push(sassLoader);
  
  return config;
};
