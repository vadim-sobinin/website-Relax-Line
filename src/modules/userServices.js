export class UserServices {
  getUsers() {
    return fetch("https://json-server-relax-line.vercel.app/users").then(
      (res) => res.json()
    );
  }

  getServices() {
    return fetch("https://json-server-relax-line.vercel.app/data").then((res) =>
      res.json()
    );
  }

  addServices(data) {
    return fetch("https://json-server-relax-line.vercel.app/data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }).then((res) => res.json);
  }
  removeService(id) {
    return fetch(`https://json-server-relax-line.vercel.app/data/${id}`, {
      method: "DELETE",
    }).then((res) => res.json);
  }

  editService(id, data) {
    return fetch(`https://json-server-relax-line.vercel.app/data/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }).then((res) => res.json);
  }

  filterServices(filterOpt) {
    return fetch(
      `https://json-server-relax-line.vercel.app/data${filterOpt}`
    ).then((res) => res.json());
  }

  sortServices(sortOpt) {
    return fetch(
      `https://json-server-relax-line.vercel.app/data${sortOpt}`
    ).then((res) => res.json());
  }
}
