function Price(meal, price) {
  let count = +prompt(`${meal} nechta olmoqchisiz`);
  let conf = confirm(
    `${count} ta ${meal} narxi ${
      count * price
    } so'm\n Maxsulotni zakaz qilasizmi`
  );
  if (conf) {
    alert("Zakaz qabul qilindi");
  }
}
