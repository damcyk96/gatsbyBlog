const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "fi921gn0agwh",
        accessToken: "BZ_ATIXSEHQmlWl_TaxuENzb6_3QgjGQU5oS2b1pI4I",
      },
    },
  ],
};
