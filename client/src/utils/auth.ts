const fbFetchConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const fbLoginInit = () => {
  window.fbAsyncInit = function() {
    FB.init({
      appId: '271939657065304',
      xfbml: true,
      version: 'v3.2'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};
export const fbLogIn = (cb: Function) => {
  FB.login((response: any) => {
    const {
      authResponse: { accessToken, userID }
    } = response;
    fetch('http://localhost:4000/login-with-facebook', {
      ...fbFetchConfig,
      body: JSON.stringify({ accessToken, userID })
    })
      .then(response => response.json())
      .then(({ message }) =>
        cb(message.name, message.facebookID, message.events)
      );
  });
};
