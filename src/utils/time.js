  function getFormattedTime(isoDate) {
    const entryDate = new Date(isoDate);

    // toTimeString
    const entryTime = entryDate.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    return entryTime;
  }

  export default getFormattedTime