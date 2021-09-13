const axios = require("axios");

module.exports = function(api) {
  api.loadSource(async store => {
    const { data } = await axios.get(
      "https://boxboxboxbox.com/wp-json/wp/v2/twitter"
    );

    const contentType = store.addCollection({
      typeName: "Tweet"
    });

    contentType.addNode({
      data
    });
  });
};
