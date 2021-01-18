module.exports = function(eleventyConfig) {
  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias('default', '_layouts/default.html');
  eleventyConfig.addLayoutAlias('post', '_layouts/post.html');

  eleventyConfig.addPassthroughCopy('main.css');
}