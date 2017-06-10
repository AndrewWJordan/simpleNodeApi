var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/tasks",
  "method": "GET",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "postman-token": "528171c6-9a07-7795-77ad-41813d5d0c47"
  },
  // Your data below
  "data": {
    "name": "My node app test"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
