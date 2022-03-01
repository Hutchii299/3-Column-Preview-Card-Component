"use strict"
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

//model
import * as model from "../model/model.js";

//views
import cardView from "../views/cardView.js";
import attributionView from "../views/attributionView.js";

//controls
const controlCards = function () {
    cardView.render(model.data);
}

const controlAttribution = function () {
    attributionView.render();
}

//events
const init = function () {
    cardView.addHandlerRender(controlCards);
    attributionView.addHandlerRender(controlAttribution);
}
init();
