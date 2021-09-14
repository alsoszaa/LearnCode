const fetch = require("node-fetch");
fetch('http://www.google.com')
.then(function(res) {
    status = res.status;
    if(status === 200) {
        exitCode = 0;
        process.exit(exitCode);
    }
    else {
        exitCode = 1;
        process.exit(exitCode);
    }
});