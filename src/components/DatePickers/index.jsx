import "./style.scss";
import { useState } from "react";
import { DateObject } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";

const CRangePicker = () => {
  const [values, setValues] = useState([
    new DateObject().subtract(0, "days"),
    new DateObject().add(10, "days"),
  ]);

  return (
    <DatePicker
      format={"DD MMMM YYYY"}
      placeholder="click to open"
      value={values}
      onChange={setValues}
      range
      dateSeparator=" - "
      portal
      render={<InputIcon />}
      numberOfMonths={2}
    />
  );
};

export default CRangePicker;
