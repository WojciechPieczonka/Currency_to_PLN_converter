const sel = document.querySelector("#select");
console.log(sel.value);
sel.value = " ";

sel.addEventListener("change", () => {
  console.log(sel.value);
});

const converted = document.querySelector("#converted");
converted.addEventListener("change", () => {
  console.log(converted.value);
});

const input = document.querySelector("#input");
input.addEventListener("change", () => {
  const inputed = input.value;
  console.log(input.value);
});

const chfSet = () => {
  if (sel.value === "chf") {
    axios
      .get("http://api.nbp.pl/api/exchangerates/rates/a/chf/")
      .then((response) => {
        const chf = response.data.rates[0].mid;
        const convertedChf = chf * input.value;
        converted.value = convertedChf;
        console.log(chf * input.value);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    console.log("nie ustawiono chf");
  }
};

const usdSet = () => {
  if (sel.value === "usd") {
    axios
      .get("http://api.nbp.pl/api/exchangerates/rates/a/usd/")
      .then((response) => {
        const usd = response.data.rates[0].mid;
        const convertedUsd = usd * input.value;
        converted.value = convertedUsd;
        console.log(usd * input.value);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    console.log("nie ustawiono usd");
  }
};

const euroSet = () => {
  if (sel.value === "eur") {
    axios
      .get("http://api.nbp.pl/api/exchangerates/rates/a/eur/")
      .then((response) => {
        const euro = response.data.rates[0].mid;
        const convertedEuro = euro * input.value;
        converted.value = convertedEuro;
        console.log(convertedEuro);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    console.log("nie ustawiono euro");
  }
};

const convertBtn = document.querySelector("#convertBtn");
convertBtn.addEventListener("click", () => {
  if (sel.value === "eur") {
    euroSet();
  } else if (sel.value === "usd") {
    usdSet();
  } else if (sel.value === "chf") {
    chfSet();
  } else {
    console.log("wybierz walutę");
  }
});
