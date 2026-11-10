function formatName(name) {
  if (!name) return;
  const trimmedName = name.trim();
  return (
    trimmedName.slice(0, 1).toUpperCase() + trimmedName.slice(1).toLowerCase()
  );
}

function formatDate(date) {
  if (!date) return;
  const dateArray = date.split("-");
  const formattedDate = `${dateArray[0]}.${dateArray[1]}`;
  return formattedDate;
}

function formatIncome(value) {
  if (value === "" || value === null || isNaN(value)) {
    return "0";
  }

  return Number(value).toLocaleString("en-US");
}

export { formatName, formatDate, formatIncome };
