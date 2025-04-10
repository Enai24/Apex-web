export const formatSalary = (min: number, max: number, currency: string = '₹') => {
  const formatValue = (value: number) => {
    if (value >= 100000) {
      return `${(value / 100000).toFixed(1)}L`;
    }
    return value.toLocaleString();
  };

  return `${currency}${formatValue(min)} - ${formatValue(max)}`;
};

export const formatDate = (date: string) => {
  const d = new Date(date);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
};