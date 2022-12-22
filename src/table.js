import { addServices } from "./modules/addServices";
import { editServices } from "./modules/editServices";
import { removeService } from "./modules/removeService";
import { render } from "./modules/renderTable";
import { UserServices } from "./modules/userServices";

if (!document.cookie) {
  window.location.replace("http://localhost:8080/admin/index.html");
} else {
  window.userServices = new UserServices();

  userServices.getServices().then((data) => {
    render(data);
  });

  removeService();
  addServices();
  editServices();
}