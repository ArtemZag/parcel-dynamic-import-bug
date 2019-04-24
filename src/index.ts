import 'babel-polyfill';

async function load() {
  switch (window["rootIndex"]) {
    case 1:
      await import("./rootItem1");
      break;
    case 2:
      await import("./rootItem2");
      break;
  }
}

load();
