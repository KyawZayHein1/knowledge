document.addEventListener("DOMContentLoaded", () => {
  const contentSections = document.querySelectorAll(".content-section");
  const subContents = document.querySelectorAll(".sub-content");
  const groupButtons = document.querySelectorAll(".button-group button");
  const statusDisplay = document.getElementById("status-display");

  // Function to show main content
  window.showContent = (id) => {
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  };

  // Function to show sub-content
  window.showSubContent = (id) => {
    subContents.forEach((content) => {
      content.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  };

  // Function to update electricity schedule
  const updateSchedule = (group) => {
    const scheduleData = {
      A: { status: "On", timeLeft: "2 hours" },
      B: { status: "Off", timeLeft: "1 hour" },
      C: { status: "On", timeLeft: "3 hours" },
    };

    const { status, timeLeft } = scheduleData[group];
    statusDisplay.innerHTML = `
      <h4>Group ${group}</h4>
      <p>Electricity is currently: <strong>${status}</strong></p>
      <p>Time left: <strong>${timeLeft}</strong></p>
    `;
  };

  // Attach event listeners to group buttons
  groupButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.getAttribute("data-group"); // Use data-* attribute for robustness
      updateSchedule(group);
    });
  });

  // Initialize with Group A
  updateSchedule("A");
});
