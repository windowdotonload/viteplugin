/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
export default function myPlugin() {
  return {
    name: "my-plugin",
    resolveId(id) {
      console.log("this is id --", id);
    },
    load(id) {
      console.log("this is id in load ======>", id);
    },
    transform(code, id) {
      console.log("this is code", code, id);
    },
  };
}
