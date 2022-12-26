import { addServices } from "./modules/addServices";
import { editServices } from "./modules/editServices";
import { filterServices } from "./modules/filterServices";
import { removeService } from "./modules/removeService";
import { render } from "./modules/renderTable";
import { sortServices } from "./modules/sortServices";
import { UserServices } from "./modules/userServices";

if (!document.cookie) {
  window.location.replace("http://localhost:8080/admin/index.html");
} else {
  window.userServices = new UserServices();

  userServices.getServices().then((data) => {
    render(data);
  });

  const backToSiteBtn = document.querySelector(".back-to-site");
  backToSiteBtn.addEventListener("click", () =>
    window.location.replace("http://localhost:8080/")
  );

  removeService();
  addServices();
  editServices();
  filterServices();
  sortServices();
}
