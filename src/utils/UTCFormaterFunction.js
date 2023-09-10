export function formatUtcTimes(utcTimesArray) {
  return utcTimesArray.map((timezones, index) => {
    if (index === utcTimesArray.length - 1) {
      return timezones.replace(/(UTC)([-+]\d{1,2}:\d{2})/, "$1 $2");
    } else {
      return timezones.replace(/(UTC)([-+]\d{1,2}:\d{2})/, "$1 $2, ");
    }
  });
}
