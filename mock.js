const fs = require('fs');

fs.cp('./mock', './docs/.vuepress/public/mock', { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
});
