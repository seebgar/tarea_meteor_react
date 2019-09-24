import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

 
 import MonthForecast from "/imports/ui/MonthForecast";

 
Meteor.startup(() => {
  render(<MonthForecast/>, document.getElementById("render-target"));
});