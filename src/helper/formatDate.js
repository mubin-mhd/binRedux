function formatDate(dateValue) {
  const input = dateValue;
  const date = new Date(input);
  const output = `${("0" + date.getDate()).slice(-2)}/${(
    "0" +
    (date.getMonth() + 1)
  ).slice(-2)}/${date.getFullYear()}`;
  return output;
}

export default formatDate;
