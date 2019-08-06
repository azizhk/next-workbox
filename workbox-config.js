module.exports = {
  globDirectory: "out",
  globPatterns: ["**/*.html"],
  swSrc: "public/sw.js",
  injectionPoint: "self.__WB_INJECT_MANIFEST",
  swDest: "out/sw.js"
};
