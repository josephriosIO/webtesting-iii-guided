module.exports = {
  post
};

function post(url, payload) {
  return payload.password && payload.password === "mellon"
    ? Promise.resolve({ success: true, statusCode: 200 })
    : Promise.reject({ success: false, statusCode: 401 });
}
