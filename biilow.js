let totalScore = 0;  // Variable to store the total score

document.getElementById('submit-btn').addEventListener('click', function() {
  const teamAgoals = parseInt(document.getElementById('teamA-goals').value);
  const teamBgoals = parseInt(document.getElementById('teamB-goals').value);
  const voterName = document.getElementById('voter-name').value;

  // Validate the form inputs
  if (isNaN(teamAgoals) || isNaN(teamBgoals) || !voterName) {
    alert("Please fill in all fields.");
    return;
  }

  // Display the prediction
  const resultText = `${voterName} Waxa u ku saadaliyay: Nugaal FC  ${teamAgoals} goals, Bari FC ${teamBgoals} goals.`;
  document.getElementById('result').textContent = resultText;

  // Add the voter to the list
  const voterList = document.getElementById('voters-list');
  const voterItem = document.createElement('div');
  voterItem.classList.add('voter-item');
  voterItem.innerHTML = `
    <span>${voterName}</span>: Nugaal - ${teamAgoals} goals, Bari - ${teamBgoals} goals
  `;
  voterList.appendChild(voterItem);

  // Calculate the total score and update the display
  totalScore += teamAgoals + teamBgoals;
  document.getElementById('total-score').textContent = totalScore;

  // Clear the form fields after submission
  document.getElementById('voter-name').value = '';
  document.getElementById('teamA-goals').value = '';
  document.getElementById('teamB-goals').value = '';
});
