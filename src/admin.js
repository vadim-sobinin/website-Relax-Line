import { loginUser } from "./modules/loginUser";
import { UserServices } from "./modules/userServices";

if (document.cookie) {
  window.location.replace("http://localhost:8080/admin/table.html");
} else {
  window.userServices = new UserServices();
  loginUser(600);
}
