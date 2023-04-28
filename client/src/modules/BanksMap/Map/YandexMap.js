import { getPointsBanks } from "./api/getPointsBanks";
import { points as pointsStore } from "../../../store/mapStore";
import "./yandexmap.scss";

export const YandexMap = async () => {
  const points = await getPointsBanks();
  pointsStore.data = points.data;
  pointsStore.status = points.status;

  const map = document.createElement("div");
  map.setAttribute("id", "YandexMap");

  ymaps.ready(init);
  function init() {
    const myMap = new ymaps.Map("YandexMap", {
      center: [55.758468, 37.601088],
      zoom: 10,
      controls: ["zoomControl", "geolocationControl"],
    });

    points.data.forEach((point) => {
      addPointonMap(myMap, point.lat, point.lon);
    });
  }

  return map;
};

function addPointonMap(map, lat, lon) {
  const bank = new ymaps.Placemark([lat, lon]);
  map.geoObjects.add(bank);
}
