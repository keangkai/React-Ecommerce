# React-Ecommerce
React-Ecommerce

# npm run dev for run front-end and Backend pararell

# css
.calendar {
    color: transparent;
    border: none;
    width: 47px;
    caret-color: transparent;
}

input[type='date']:focus {
    outline: none;
    caret-color: transparent;
}

input[type='date']:active {
    background: transparent;
}

#calendar function 
const [date, setDate] = React.useState("");

  const renderFormat = () => {
    const dateFormat = date.split("-")[2];
    const monthFormat = date.split("-")[1];
    const year = date.split("-")[0];

    var months = [
      "ม.ค.",
      "ก.พ.",
      "มี.ค.",
      "เม.ย.",
      "พ.ค.",
      "มิ.ย.",
      "ก.ค.",
      "ส.ค.",
      "ก.ย.",
      "ต.ค.",
      "พ.ย.",
      "ธ.ค.",
    ];
    var month = months[parseInt(monthFormat) - 1];

    const finalDateFormat = `${dateFormat} ${month} ${year}`;
    console.log("dateFormat", dateFormat);
    console.log("month", month);
    console.log("year", year);
    console.log(
      "finalDateFormat",
      dateFormat === undefined && month === undefined
    );

    return finalDateFormat;
  };
  
{date === "" ? "select date" : renderFormat()}
<input
  className="calendar"
  type="date"
  onChange={(e) => setDate(e.target.value)}
/>
