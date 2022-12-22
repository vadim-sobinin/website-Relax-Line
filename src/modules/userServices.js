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

  editPermission(id, data) {
    return fetch(`http://localhost:4545/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }).then((res) => res.json);
  }

  filterUsers(filterOpt) {
    return fetch(`http://localhost:4545/users${filterOpt}`).then((res) =>
      res.json()
    );
  }

  sortUsers(sortOpt) {
    return fetch(`http://localhost:4545/users${sortOpt}`).then((res) =>
      res.json()
    );
  }

  searchUsers(str) {
    return fetch(`http://localhost:4545/users?name_like=${str}`).then((res) =>
      res.json()
    );
  }
}
