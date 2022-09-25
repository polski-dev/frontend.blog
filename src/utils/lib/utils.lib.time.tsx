class time {
  nameOfTheMonths = (date: Date) => {
    const dateStart = new Date(date);

    switch (dateStart.getMonth()) {
      case 0:
        return `${dateStart.getDate()} Stycznia`;
      case 1:
        return `${dateStart.getDate()} Lutego`;
      case 2:
        return `${dateStart.getDate()} Marca`;
      case 3:
        return `${dateStart.getDate()} Kwietnia`;
      case 4:
        return `${dateStart.getDate()} Maja`;
      case 5:
        return `${dateStart.getDate()} Czerwca`;
      case 6:
        return `${dateStart.getDate()} Lipca`;
      case 7:
        return `${dateStart.getDate()} Sierpnia`;
      case 8:
        return `${dateStart.getDate()} Września`;
      case 9:
        return `${dateStart.getDate()} Października`;
      case 10:
        return `${dateStart.getDate()} Listopada`;
      case 11:
        return `${dateStart.getDate()} Grudnia`;
    }
  };

  countDays = (date: Date) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const daysHavePassed = Math.round(Math.abs((new Date(date).getTime() - new Date().getTime()) / oneDay));

    if (daysHavePassed <= 31) return `${daysHavePassed === 0 ? `dziś` : `${daysHavePassed} dni temu`}`;
    if (daysHavePassed > 31 && daysHavePassed < 365) return `${daysHavePassed / 30 === 1 ? "miesiąc temu" : daysHavePassed / 30 < 10 ? `${Math.round(daysHavePassed / 30)} miesiące temu` : `${Math.round(daysHavePassed / 30)} miesięcy temu`}`;
    if (daysHavePassed >= 365) return `${daysHavePassed / 365 === 1 ? `rok` : `${Math.round(daysHavePassed / 365)} lata temu`}`;
  };
}

export default new time();
