document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to Knowledge Hub!');

  // Data for each category
  const categoryData = {
    Technology: "Latest trends in technology and advancements.",
    Telecommunications: "Insights and updates on the telecommunications industry.",
    Learning: "Guides, tutorials, and learning resources to improve your skills.",
    History: `<h3>World War II</h3>
              <p>World War II was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's nations, including all of the great powers, eventually forming two opposing military alliances: the Allies and the Axis.</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/WWII_Montage.PNG" alt="WWII Montage" style="width:100%;max-width:600px;">`,
    Community: "Join discussions and connect with the community here.",
  };

  // Show category content dynamically
  window.showCategory = function (category) {
    const content = categoryData[category] || "Content not available.";
    document.getElementById('selected-category').textContent = category;
    document.getElementById('category-content').innerHTML = content;
  };
});
