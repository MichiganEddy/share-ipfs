
'require strict';
const ip = require('ip-public');


// GLIP: Get Local IP
glip = function glip() {
    let pr = new Promise(
        (resolve, reject) => {
            ip.v4().then(
                function (ip) {
                    if (ip) {
                        resolve(ip)
                    } else {
                        reject(reason);
                    }
                }
            );
        }
    ).
    then(
        function (val) {
            console.log("Promise resolved.");
            console.log(`IP_ADDR: ${val}`);
            return true;
        }
    ).
    catch(
        function (reason) {
            console.log(`Promise Rejected!: ${reason}`);
        }
    );
}