function formatRelativeDate(timestamp, intlDate) {
  // for dashboard header
  if (intlDate)
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(timestamp);

  // for moodItem
  const entryDate = new Date(timestamp);
  const todayDate = new Date();

  // Remove time from both dates (compare only calendar days)
  const entryDateWithoutTime = new Date(entryDate);
  entryDateWithoutTime.setHours(0, 0, 0, 0);

  const todayDateWithoutTime = new Date(todayDate);
  todayDateWithoutTime.setHours(0, 0, 0, 0);

  const diffInMilliseconds = todayDateWithoutTime - entryDateWithoutTime;

  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays > 7)
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(entryDate);
}

export default formatRelativeDate;

//   if (diffInDays === 0) return 'Yesterday';
