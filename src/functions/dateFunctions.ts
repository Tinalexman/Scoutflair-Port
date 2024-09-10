const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function convertDateFull(date: string | Date) {
  let dateObject = new Date(date);

  let day = dateObject.getDate();
  let month = dateObject.getMonth();
  let year = dateObject.getFullYear();

  let monthName = monthNames[month];

  let dayWithSuffix = day + getOrdinalSuffix(day);

  return `${monthName} ${dayWithSuffix}, ${year}`;
}

export function convertDateFullAndTime(date: string | Date) {
  let dateObject = new Date(date);

  let day = dateObject.getDate();
  let month = dateObject.getMonth();
  let year = dateObject.getFullYear();

  let monthName = monthNames[month];

  let dayWithSuffix = day + getOrdinalSuffix(day);

  return `${monthName} ${dayWithSuffix}, ${year} ${convertTime(dateObject)}`;
}

export function convertDateWithDayName(date: string | Date) {
  let dateObject = new Date(date);

  let day = dateObject.getDate();
  let month = dateObject.getMonth();
  let year = dateObject.getFullYear();

  let monthName = monthNames[month];

  let dayWithSuffix = day + getOrdinalSuffix(day);

  return `${
    dayNames[dateObject.getDay()]
  }, ${monthName} ${dayWithSuffix}, ${year}`;
}

function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function getCurrentMonthWithYear() {
  let dateObject = new Date();

  let month = dateObject.getMonth();
  let year = dateObject.getFullYear();

  let monthName = monthNames[month];
  return `${monthName}, ${year}`;
}

export function convertDateWithSlashesAndTime(date: Date) {
  let isPM = date.getHours() > 11;
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${date.getDate() < 10 ? "0" : ""}${date.getDate()}/${
    date.getMonth() < 10 ? "0" : ""
  }${date.getMonth()}/${date.getFullYear()}, ${hours % 12 < 10 ? "0" : ""}${
    hours === 0 || hours % 12 === 0 ? "12" : hours % 12
  }:${minutes < 10 ? "0" : ""}${minutes} ${isPM ? "PM" : "AM"}`;
}

export function convertTime(date: Date) {
  let isPM = date.getHours() > 11;
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours !== 12 && hours % 12 < 10 ? "0" : ""}${
    hours === 0 || hours % 12 === 0 ? "12" : hours % 12
  }:${minutes < 10 ? "0" : ""}${minutes} ${isPM ? "PM" : "AM"}`;
}

export function convertDateWithSlashes(date: Date) {
  return `${date.getDate() < 10 ? "0" : ""}${date.getDate()}/${
    date.getMonth() < 10 ? "0" : ""
  }${date.getMonth()}/${date.getFullYear()}`;
}

export function isLeapYear(year: number) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      return year % 400 == 0;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

export function getDaysOfCurrentMonth() {
  let month = new Date().getMonth();
  let year = new Date().getFullYear();

  if (month == 4 || month == 6 || month == 9 || month == 11) return 30;
  if (month == 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return 31;
}

export function getYearDifference(firstDate: Date, secondDate: Date): number {
  const date1 = firstDate.getMilliseconds();
  const date2 = secondDate.getMilliseconds();
  const diffInMilliseconds = Math.abs(date2 - date1);
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  return Math.floor(diffInMilliseconds / millisecondsInYear);
}
