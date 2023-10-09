export default function (ctx, inject) {
  const api = {
    path: "....",
    call() {
      console.log("blabla");
    },
  };

  ctx.$myCustomApiPlugin = api;
  inject("myCustomApiPlugin", api);
}
