import axios from "axios";

export const getHome = (req, res) => {
  return res.render("home");
};

export const postLineMessage = async (req, res) => {
  try {
    const clientId = ""; // !
    const clientSecret = ""; // !
    const accessTokenUrl = "https://api.line.me/v2/oauth/accessToken";

    const { data } = await axios.post(accessTokenUrl, {
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    });

    return res.status(200).json({
      code: 200,
      message: {
        data,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, message: "server error" });
  }
};
