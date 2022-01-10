export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('pt-br', {
    timeZone: 'UTC',
  });
};
