import Navigo from "navigo";
import { authPage } from "./pages/auth";
import { mapPage } from "./pages/map";
import { currencyPage } from "./pages/currency";
import { accountIdPage } from "./pages/accountId";
import { accountPage } from "./pages/account";
import { points } from "./store/mapStore";
import { ModalOops } from "./components/ModalOops/ModalOops";
import { currencyStore } from "./store/currencyStore";
import { transactionsHistoryPage } from "./pages/transactions-history";

export const socket = new WebSocket("ws://localhost:3000/currency-feed");
export const router = new Navigo("/");

router
  .on("/", function () {
    router.navigate("/auth");
  })
  .resolve();

router
  .on("/auth", function () {
    document.body.innerHTML = "";
    authPage();
  })
  .resolve();

router
  .on("/account", async function () {
    if (localStorage.getItem("token")) {
      document.body.innerHTML = "";
      await accountPage();
    } else {
      router.navigate("/auth");
    }
  })
  .resolve();

router
  .on("/account/:id", async function () {
    if (localStorage.getItem("token")) {
      document.body.innerHTML = "";
      accountIdPage();
    } else {
      router.navigate("/auth");
    }
  })
  .resolve();

router
  .on("/account/:id/transactions-history", function () {
    if (localStorage.getItem("token")) {
      document.body.innerHTML = "";
      transactionsHistoryPage();
    } else {
      router.navigate("/auth");
    }
  })
  .resolve();

router
  .on("/available-currency", async function () {
    if (localStorage.getItem("token")) {
      document.body.innerHTML = "";
      await currencyPage();
    } else {
      router.navigate("/auth");
    }
    if (currencyStore.status !== 200) ModalOops();
  })
  .resolve();

router
  .on("/banks-map", async function () {
    if (localStorage.getItem("token")) {
      document.body.innerHTML = "";
      await mapPage();
    } else {
      router.navigate("/auth");
    }
    if (points.status !== 200) {
      ModalOops();
    }
  })
  .resolve();
