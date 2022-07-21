export function isInThePastBy(date: string, noOfDays = 0) {
  let today = new Date();
  today = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + noOfDays
  );
  today.setHours(0, 0, 0, 0);
  return new Date(date) < today;
}
