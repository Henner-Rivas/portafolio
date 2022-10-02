export const sendMail = (data) => {
  try {
    return fetch("https://server-node-vercel.vercel.app/api/send_mail", {
      method: "POST",
      headers: {
        Accept: "aplication/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log("response", response);
      return response.json();
    });
  } catch (err) {
    console.log("err", err);
  }
};
