import process from "process";

class UserManager {
  constructor() {
    if (document.cookie) {
      const cookies = parseCookie(document.cookie);
      if (cookies["Token"]) {
        this.token = cookies["Token"];
      }
    }
  }

  setToken(token) {
    this.token = token;
  }

  async register(username) {
    const response = await fetch(
      "http://" + process.env.REACT_APP_BASE_URL + "/user/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      }
    );
    const data = await response.json();
    if (data["token"]) {
      this.token = data["token"];
      document.cookie = "Token=" + this.token;
      return this.token;
    }
    return null;
  }
}

const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

export default UserManager;
