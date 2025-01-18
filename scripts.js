document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to Knowledge Hub!');

  // Data for each category
  const categoryData = {
    Technology: `<h3>Technology Update - January 2025</h3>
                 <ol>
                   <li><strong>Floating Solar Panels: A New Energy Frontier</strong><br>
                       A recent study by DOE scientists reveals that floating solar panels on federally managed reservoirs could potentially power up to 100 million homes. This innovative approach harnesses solar energy efficiently while conserving land space.</li>
                   <li><strong>Silicon Photonics Breakthrough</strong><br>
                       An international research team has unveiled the first electrically pumped continuous-wave semiconductor laser designed for seamless integration with silicon photonics. This breakthrough could revolutionize data communication and processing.</li>
                   <li><strong>Safer, Stronger Batteries</strong><br>
                       Researchers have developed a quasi-solid-state lithium-ion battery that offers enhanced stability, safety, and longevity. This advancement addresses key challenges in battery technology, paving the way for safer and more reliable energy storage solutions.</li>
                   <li><strong>Ultra-Thin Lenses for Advanced Optics</strong><br>
                       A groundbreaking method to produce Fresnel zone plates, which are paper-thin optical lenses, has been developed. These ultra-thin lenses have the potential to revolutionize various fields, including imaging and telecommunications.</li>
                   <li><strong>3D-Printed Eco-Friendly Walls</strong><br>
                       ETH Zurich scientists have created 3D-printed wall panels from marble waste that passively control humidity and contribute to climate change mitigation. This innovation represents a significant step towards sustainable building practices.</li>
                 </ol>
                 <p>Stay tuned for more updates on the latest technological advancements!</p>`,
    Telecommunications: "Insights and updates on the telecommunications industry.",
    Learning: "Guides, tutorials, and learning resources to improve your skills.",
    History: `<h3>World War II: A Brief Overview</h3>
              <p>World War II, also known as the Second World War, was the largest and deadliest conflict in human history. It lasted from 1939 to 1945 and involved more than 50 nations. The war began when Nazi Germany, led by Adolf Hitler, invaded Poland on September 1, 1939. This prompted Britain and France to declare war on Germany.</p>
              <p>The major combatants were divided into two opposing military alliances: the Allies and the Axis. The Allies primarily included the United States, the Soviet Union, the United Kingdom, China, and France. The Axis powers consisted of Germany, Italy, and Japan.</p>
              <p>Key events of the war included the German invasion of the Soviet Union, the attack on Pearl Harbor by Japan, and the D-Day invasion of Normandy by Allied forces. The war in Europe ended with the unconditional surrender of Germany in May 1945, while the war in the Pacific concluded after the United States dropped atomic bombs on the Japanese cities of Hiroshima and Nagasaki in August 1945.</p>
              <p>The aftermath of World War II saw significant geopolitical changes, including the emergence of the United States and the Soviet Union as superpowers and the beginning of the Cold War. The war also led to the establishment of the United Nations, aimed at preventing future global conflicts.</p>
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
