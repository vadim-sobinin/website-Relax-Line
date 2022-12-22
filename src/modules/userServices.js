export class UserServices {
  getUsers() {
    return fetch("http://localhost:4545/users").then((res) => res.json());
  }

  getServices() {
    return fetch("http://localhost:4545/data").then((res) => res.json());
  }

  addServices(data) {
    return fetch("http://localhost:4545/data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }).then((res) => res.json);
  }
  removeService(id) {
    return fetch(`http://localhost:4545/data/${id}`, {
      method: "DELETE",
    }).then((res) => res.json);
  }

  editService(id, data) {
    return fetch(`http://localhost:4545/data/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }).then((res) => res.json);
  }

  filterServices(filterOpt) {
    return fetch(`http://localhost:4545/data${filterOpt}`).then((res) =>
      res.json()
    );
  }

  sortServices(sortOpt) {
    return fetch(`http://localhost:4545/users${sortOpt}`).then((res) =>
      res.json()
    );
  }
}
