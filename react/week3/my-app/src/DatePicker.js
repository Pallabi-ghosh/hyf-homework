import React from "react";

//import { DateTimePicker } from "@progress/kendo-react-dateinputs";

class DateTimePicker extends React.Component {
  defaultValue = new Date();

  render() {
    return (
      <div className="example-wrapper" style={{ minHeight: "400px" }}>
        <div className="col-xs-12 col-sm-6 example-col">
          <p>Select a long date-time: </p>
          <DateTimePicker
            format={"dd-MM-yyyy"}
            defaultValue={this.defaultValue}
            width={200}
          />
        </div>
      </div>
    );
  }
}

export default DateTimePicker;
