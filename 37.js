
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api.theone.art/user/api/userCheckIn/save`;
const method = `POST`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Origin' : `https://www.theone.art`,
'Connection' : `keep-alive`,
'Accept' : `application/json, text/plain, */*`,
'Referer' : `https://www.theone.art/`,
'Host' : `api.theone.art`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1`,
'Authorization' : `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzQxNjQzNzIzNiIsImlhdCI6MTY1MzQ4NTg0OCwiZXhwIjoxNjU0MDkwNjQ4fQ.ryKxwCTP_jCr6im4Sp7tFh0KdpjuOXmRXaiGpV8dd7E33uRO-jjPeeaUn1QaHshEPa28_cZlO13aDsrHndzP0w`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);

    $notify("37", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
