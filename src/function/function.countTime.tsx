class CountTime {
  nameOfTheMonths = (date: Date) => {
    const dateStart = new Date(date);

    switch (dateStart.getMonth()) {
      case 0:
        return `${dateStart.getDay()} Stycznia`;
      case 1:
        return `${dateStart.getDay()} Lutego`;
      case 2:
        return `${dateStart.getDay()} Marca`;
      case 3:
        return `${dateStart.getDay()} Kwietnia`;
      case 4:
        return `${dateStart.getDay()} Maja`;
      case 5:
        return `${dateStart.getDay()} Czerwca`;
      case 6:
        return `${dateStart.getDay()} Lipca`;
      case 7:
        return `${dateStart.getDay()} Sierpnia`;
      case 8:
        return `${dateStart.getDay()} Września`;
      case 9:
        return `${dateStart.getDay()} Października`;
      case 10:
        return `${dateStart.getDay()} Listopada`;
      case 11:
        return `${dateStart.getDay()} Grudnia`;
    }
  };

  countDays = (date: Date) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const daysHavePassed = Math.round(Math.abs((new Date(date).getTime() - new Date().getTime()) / oneDay));
    if (daysHavePassed <= 31) return `${daysHavePassed === 0 ? `dziś` : `${daysHavePassed} dni temu`}`;
    if (daysHavePassed > 31 && daysHavePassed < 365) return `${daysHavePassed / 30 === 1 ? "miesiąc" : `${daysHavePassed / 30} miesięcy`} temu`;
    if (daysHavePassed >= 365) return `${daysHavePassed / 365 === 1 ? `rok` : `${daysHavePassed / 365} lata`} temu`;
  };
}

export default new CountTime();
