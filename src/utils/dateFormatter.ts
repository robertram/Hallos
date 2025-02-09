export const formatEventDate = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  const startFormatted = start.toLocaleDateString('en-US', options);
  const endFormatted = end.toLocaleDateString('en-US', {
    ...options,
    month: undefined // Don't show month if it's the same day
  });

  return `${startFormatted} - ${endFormatted}`;
}; 