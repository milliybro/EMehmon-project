import "./style.scss";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Button } from "antd";
import { add } from "date-fns";
import ReactDatePicker from "react-datepicker";

const CRangePicker = ({
  value = [null, null],
  onChange,
  interval = "weeks",
}) => {
  const clickHandler = (number) => {
    if (!value[0] || !value[1]) return;

    const newValue = [
      add(value[0], { [interval]: number }),
      add(value[1], { [interval]: number }),
    ];
    onChange(newValue);
  };
  console.log(value);

  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: 2 }}
      className="ucode-rangepicker"
    >
      <Button onClick={() => clickHandler(-1)}>
      <ArrowLeft />
      </Button>

      <ReactDatePicker
        selected={value[0]}
        onChange={onChange}
        startDate={value[0]}
        endDate={value[1]}
        selectsRange
        showPopperArrow={false}
        dateFormat="dd.MM.yyyy"
      />

      <Button onClick={() => clickHandler(1)}><ArrowRight /></Button>
    </div>
  );
};

export default CRangePicker;
