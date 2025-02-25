const mainUrl = "https://carsales-s2fj.onrender.com";

const token = localStorage.getItem("token");

export const fetch_data = {
  fetch: async (route, methods = "GET", body) => {
    const res = await fetch(mainUrl + route, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: methods,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw {
        status: res.status,
      };
    }

    const data = await res.json();

    return data;
  },
};
