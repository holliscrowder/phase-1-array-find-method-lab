function superbowlWin(record) {
  const winningRecord = record.find(lookAtRecord);
  if (winningRecord) {
    return winningRecord.year;
  }
}

function lookAtRecord(element) {
  return element.result === "W";
}
