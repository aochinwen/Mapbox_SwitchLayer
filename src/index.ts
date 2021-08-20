import {
  MapboxStyleDefinition,
  MapboxStyleSwitcherControl
} from "mapbox-gl-style-switcher";
import mapboxgl from "mapbox-gl";
import "mapbox-gl-style-switcher/styles.css";
//import { MapboxStyleDefinition, MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamhwYXJ0eTAxIiwiYSI6ImNrcHJyeGsyaTA3MGQybm8wNmg3cDZ1eW0ifQ.Y488Xi46Wl7UytdeB4gpWw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  center: [-122.4194, 37.7788],
  zoom: 12
});

const styles: MapboxStyleDefinition[] = [
  {
    title: "Jiahao",
    uri: "mapbox://styles/jhparty01/ckq7qpgpz5ing17o0gciur2an"
  },
  {
    title: "Light",
    uri: "mapbox://styles/mapbox/light-v9"
  }
];
const options: MapboxStyleSwitcherOptions = {
  defaultStyle: "Dark",
  eventListeners: {
    // return true if you want to stop execution
    //           onOpen: (event: MouseEvent) => boolean;
    //           onSelect: (event: MouseEvent) => boolean;
    //           onChange: (event: MouseEvent, style: string) => boolean;
  }
};

map.addControl(new MapboxStyleSwitcherControl(styles, options));
//map.addControl(new MapboxStyleSwitcherControl());
