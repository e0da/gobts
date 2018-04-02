/* eslint-env browser, jquery */

const config = {
  interval: 1000 * 60 * 5, // 5 minutes in milliseconds
  defaultPostParams: {
    url: 'http://localhost:3000/',
    type: 'POST',
    contentType: 'application/json',
  },
};

function postParams(customPostParams) {
  return Object.assign({}, config.defaultPostParams, customPostParams);
}

function updateRemote(data) {
  const customPostParams = {
    data: JSON.stringify(data.sidekiq),
    success: body => console.log(body), // eslint-disable-line no-console
  };
  const params = postParams(customPostParams);
  $.ajax(params);
}

function getStats() {
  return new Promise((resolve) => {
    $.get('stats', data => resolve(data));
  });
}

function update() {
  getStats().then(updateRemote);
}

// eslint-disable-next-line no-unused-vars
const interval = setInterval(update, config.interval);

// clearInterval(interval);
