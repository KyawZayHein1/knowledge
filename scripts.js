document.addEventListener('DOMContentLoaded', () => {
  const tableData = [
    { region: 'North', day: 'Monday', on: '6:00 AM', off: '10:00 AM' },
    { region: 'South', day: 'Monday', on: '10:00 AM', off: '2:00 PM' },
    { region: 'East', day: 'Tuesday', on: '8:00 AM', off: '12:00 PM' },
    { region: 'West', day: 'Wednesday', on: '7:00 AM', off: '11:00 AM' },
    // Add more data as needed
  ];

  const regionFilter = document.getElementById('region');
  const dayFilter = document.getElementById('day');
  const scheduleTableBody = document.querySelector('#schedule-table tbody');

  function renderTable(data) {
    scheduleTableBody.innerHTML = '';
    data.forEach((entry) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${entry.region}</td>
        <td>${entry.day}</td>
        <td>${entry.on}</td>
        <td>${entry.off}</td>
      `;
      scheduleTableBody.appendChild(row);
    });
  }

  function filterTable() {
    const regionValue = regionFilter.value;
    const dayValue = dayFilter.value;
    const filteredData = tableData.filter((entry) => {
      return (
        (regionValue === 'all' || entry.region.toLowerCase() === regionValue) &&
        (dayValue === 'all' || entry.day.toLowerCase() === dayValue)
      );
    });
    renderTable(filteredData);
  }

  regionFilter.addEventListener('change', filterTable);
  dayFilter.addEventListener('change', filterTable);

  // Initial render
  renderTable(tableData);
});
