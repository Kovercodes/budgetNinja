export const moneyDaily = (money, today, finishPeriod) => {
  return money / (finishPeriod - today);
};
