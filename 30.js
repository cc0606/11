
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
'Authorization' : `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTcyODc1ODQxNyIsImlhdCI6MTY1MzIwMzc3OCwiZXhwIjoxNjUzODA4NTc4fQ.KtT0_jw0Z7wORliiLQp4Rmh_A4iTKWfQoNM5h5j28ivzOMZ_jw1jiU3FY8DmNC0PUWjszh8tnBpyzaBMglLx0A`,
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

    $notify("30", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
