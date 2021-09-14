let status;
const fetch = require("node-fetch");
fetch('http://www.googkele.com')
  .then((res) => { 
    status = res.status; 
  })
  .then((jsonData) => {
    console.log(status);
  })
  .catch((err) => {
    // handle error
    console.error(err);
  });