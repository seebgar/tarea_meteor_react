import React, { Component } from "react";

import { withTracker } from "meteor/react-meteor-data";
import { Forecast } from "../api/forecast";

class MonthForecast extends Component {
  render() {
    return (
      <div>
        <div className="row text-center bg-warning">
          <div className="col-sm text-muted">31 Day Forecast</div>
        </div>
        <br/>
          <br/>
          <br/>
          <br/>
        <div className="row">
          {this.props.forecast.map((x, i) => {
            return (
              <div key={i} className="col-md-2">
                <div className="card-header bg-muted" style={{borderRadius: '1em 1em 0 0 '}}>
                  {" "}
                  Day: {x.dayName}{" "}
                  <i className="icon ion-md-calendar"></i>
                </div>
                <img
                  src="https://picsum.photos/200"
                  className="card-img-top"
                  alt="pic"
                ></img>
                <div className="card-body bg-success" style={{borderRadius: '0 0 1em 1em '}}>
                  <p><strong>Min Temp</strong> {' '} {x.minTemp}ºC</p>
                  <p><strong>Max Temp</strong> {' '} {x.maxTemp}ºC</p>
                  <p>
                    {" "}
                    Status: {x.status}{" "}
                    <i className="https://picsum.photos/20"></i>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default withTracker(() => {
  return { forecast: Forecast.find({}).fetch() };
})(MonthForecast);
