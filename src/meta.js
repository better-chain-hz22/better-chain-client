export const RiskType = {
  NATURAL_FLOOD: "NATURAL_FLOOD",
  NATURAL_DROUGHT: "NATURAL_DROUGHT",
  NATURAL_WIND: "NATURAL_WIND",
  NATURAL_EARTHQUAKE: "NATURAL_EARTHQUAKE",
  NATURAL_VOLCANO: "NATURAL_VOLCANO",
  NATURAL_HEAVY_SNOWFALL: "NATURAL_HEAVY_SNOWFALL",
  STRIKE: "STRIKE",
  CIVIL_UNREST: "CIVIL_UNREST",
  TRADE_EMBARGO: "TRADE_EMBARGO",
  EPIDEMIC: "EPIDEMIC",
  WAR: "WAR",
  PIRACY: "PIRACY",
  ROUTE_BLOCK: "ROUTE_BLOCK",
  BLACKOUT: "BLACKOUT",
  HACKING: "HACKING",
  SUPPLIER: "SUPPLIER",
  JAM: "JAM",
};

export const mapSeverityToColor = (severity) => {
  if (severity < 0.3) {
    return "#fddc69";
  } else if (severity < 0.6) {
    return "#ff832b";
  } else {
    return "#da1e28";
  }
};
