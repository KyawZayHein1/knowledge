document.addEventListener('DOMContentLoaded', () => {
  const scheduleData = [
    { Date: "5.1.2025", "05:00-09:00": "A", "09:00-13:00": "B", "13:00-17:00": "C", "17:00-21:00": "A", "21:00-01:00": "B", "01:00-05:00": "C+A" },
    { Date: "6.1.2025", "05:00-09:00": "B", "09:00-13:00": "C", "13:00-17:00": "A", "17:00-21:00": "B", "21:00-01:00": "C", "01:00-05:00": "A+B" },
    { Date: "7.1.2025", "05:00-09:00": "C", "09:00-13:00": "A", "13:00-17:00": "B", "17:00-21:00": "C", "21:00-01:00": "A", "01:00-05:00": "B+C" },
  ];

  const dateFilter = document.getElementById("date-filter");
  const groupFilter = document.getElementById("group-filter");
  const tableBody = document.querySelector("#schedule-table tbody");

  scheduleData.forEach(row => {
    const option = document.createElement("option");
    option.value = row.Date;
    option.textContent = row.Date;
    dateFilter.appendChild(option);
  });

  function renderTable(data) {
    tableBody.innerHTML = "";
    data.forEach(row => {
      const tr = document.createElement("tr");
      Object.values(row).forEach(cell => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });
  }

  function filterSchedule() {
    let filtered = [...scheduleData];
    if (dateFilter.value !== "all") {
      filtered = filtered.filter(row => row.Date === dateFilter.value);
    }
    if (groupFilter.value !== "all") {
      filtered = filtered.filter(row => Object.values(row).some(cell => cell.includes(groupFilter.value)));
    }
    renderTable(filtered);
  }

  renderTable(scheduleData);
  dateFilter.addEventListener("change", filterSchedule);
  groupFilter.addEventListener("change", filterSchedule);
});

function showContent(id) {
  document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
