//@ts-ignore
import * as asPlaygroundHost from "as-playground/src/assets/as-playground-host";
//@ts-ignore
import * as NicoJS from "nicojs/lib/nico";

window.addEventListener("load", () => {
  const hostScript = new asPlaygroundHost({
    baseUrl:
      process.env.NODE_ENV === "development"
        ? "https://localhost:4200"
        : "https://arisucool.github.io/as-playground",
    loader: "chrome_ext",
    nicoJS: NicoJS,
  });
  hostScript.init();
});
