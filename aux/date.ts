export const DateFormatter = (date: string | number | Date) => {
  const newDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const formattedDate = newDate.toLocaleDateString('en-US', options);
  return formattedDate;
};
