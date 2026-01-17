function formatRelativeDate(timestamp, intlDate) {
  // for dashboard header
  if (intlDate)
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(timestamp);

  const entryDate = new Date(timestamp); // the day this mood was recorded
  const currentDate = new Date(); // the current day

  // toDateString
  const entryDateStr = entryDate.toDateString();
  const currentDateStr = currentDate.toDateString();

  if (entryDateStr === currentDateStr) return 'Today';

  const diffInMs = currentDate - entryDate;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
}

export default formatRelativeDate;
