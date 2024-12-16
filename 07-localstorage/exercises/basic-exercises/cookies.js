// function to set the cookie value. name and value are mandatory
// if we dont provide days, it will be a session cookie
// the path by default is /
export function setCookie(name, value, days = null, path = "/") {
  let cookieString = `${name}=${value}; path=${path};`;

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    cookieString += ` expires=${expires};`;
  }

  document.cookie = cookieString;
}

// Helper function to decode cookie value
function decodeCookie(value) {
  return decodeURIComponent(value.replace(/\+/g, " "));
}

// Function to retrieve a cookie value based on its name
export function getCookie(name) {
  // Get all cookies from document.cookie
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split("=");
    acc[cookieName] = decodeCookie(cookieValue);
    return acc;
  }, {});

  // Find the cookie with the matching name
  return cookies[name] || null;
}

// function to delete a cookie based on its name
export function eraseCookie(name) {
  setCookie(name, "", -1);
}
