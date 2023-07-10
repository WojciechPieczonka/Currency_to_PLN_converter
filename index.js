const sel = document.querySelector("#select");

const convertValue = () => {
  axios
    .get(`https://api.nbp.pl/api/exchangerates/rates/a/${sel.value}/`)
    .then((response) => {
      const mid = response.data.rates[0].mid;
      const convertedValue = mid * input.value;
      converted.value = convertedValue;
    })
    .catch((err) => {
      console.error(err);
    });
};

const convertBtn = document.querySelector("#convertBtn");
convertBtn.addEventListener("click", () => {
  if (input.value >= 0.01) {
    convertValue();
  }
});
