export type Index = {
  name: string;
  value: string;
  open: number;
  high: number;
  volume: number;
  weightedReturns: number;
  yearlyReturns: number;
  daysUpDown: number;
  positiveDays: number;
};

export type StockGrowth = {
  symbol: string;
  name: string;
  industry: string;
  sector: string;
  date: Date;
  close: number;
  volume: number;
  rsi: number;
  atr: number;
  weightedStrength: number;
  daysUpDown: number;
  momentumTrend: boolean;
  strengthGrade: number;
  revenueGrade: number;
  grossProfitGrade: number;
  ebitdaGrade: number;
  opIncomeGrade: number;
  epsGrade: number;
};
