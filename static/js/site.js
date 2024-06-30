export const DEV = document.location.search.includes("dev");
export const MAXZOOM = (DEV && 4) || 3;
export const GROUPS = [
    {name: "towns", minZoom: 1.5, maxZoom: MAXZOOM, icon: '/images/town_marker.svg'},
    {name: "cities", minZoom: 0, maxZoom: MAXZOOM, icon: '/images/city_marker.svg'},
    {name: "sites", minZoom: 1.5, maxZoom: MAXZOOM, icon: '/images/chevron_marker.svg'},
    {name: "states", minZoom: 1, maxZoom: 2.5},
    {name: "features", minZoom: -0.5, maxZoom: 2.5},
];

export const mapConfig = {
    layers: ["biome", "height", "political"],
    xTiles: 10,
    yTiles: 10,
    width: 2484,
    height: 1812,
};