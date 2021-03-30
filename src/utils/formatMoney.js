const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
