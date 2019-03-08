const { INCOMES, WALLETS, COSTS } = require("../../common/constants");

export {
  INCOMES, WALLETS, COSTS
};

export const fin = {
  [INCOMES]: {
    title: "Источники дохода",
    addWindowTitle: "Новый источник дохода",
    editWindowTitle: "Редактирование источника дохода",
    amount: "Полученно в этом месяце:",
    plan: "Планирую получать в месяц:",
    round: "Нажать: просмотр операций \r\nПретащить: создание операции"
  },
  [WALLETS]: {
    title: "Счета/карты/кошельки",
    addWindowTitle: "Новый счет/карта/кошелек",
    editWindowTitle: "Редактирование счета",
    amount: "Текущая сумма:",
    plan: "Планирую откладывать в месяц:",
    round: "Нажать: просмотр операций \r\nПретащить: создание операции",
    notDraggable: "Создание операций из нулевого счета запрещено"
  },
  [COSTS]: {
    title: "Статьи расходов",
    addWindowTitle: "Новая статья расходов",
    editWindowTitle: "Редактирование статьи расходов",
    amount: "Потрачено в этом месяце:",
    plan: "Планирую тратить в месяц:",
    round: "Нажать: просмотр операций"
  }
};
