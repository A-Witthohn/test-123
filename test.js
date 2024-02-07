const myModel = new Map([    ["Playing guitar", "🎸"],
    ["Snowboarding", "🏂"],
    ["Volunteering", "🤝"],
    ["Photography", "📷"],
    ["Playing chess", "♟️"],
    ["Surf fishing", "🎣🏄‍♂️"],
    ["Cooking on a grill", "🍢🔥"],
    ["Skydiving", "🪂"],
    ["Surfing on the internet", "🌐🏄‍♂️"],
    ["Meditating", "🧘‍♂️"],
    ["Horseback riding", "🐎"],
    ["Scuba diving", "🤿🌊"],
    ["Rock climbing", "🧗‍♂️"],
    ["Playing ping pong", "🏓"],
    ["Snowshoeing", "🎿"],
    ["Taking a road trip", "🚗🛣️"],
    ["Playing volleyball", "🏐"],
    ["Ice skating", "⛸️"],
    ["Cooking on a campfire", "🔥🍳"],
    ["Attending a concert", "🎶🤘"],
    ["Swimming", "🏊‍♂️"],
    ["Cooking", "🍳"],
    ["Dancing", "💃"],
    ["Reading", "📚"],
    ["Hiking", "🥾"],
    ["Painting", "🎨"],
    ["Playing basketball", "🏀"],
    ["Writing", "📝"],
    ["Singing", "🎤"],
    ["Yoga", "🧘‍♀️"],
    ["Gardening", "🌱"],
    ["Gaming", "🎮"],
    ["Surfing", "🏄‍♂️"],
    ["Skateboarding", "🛹"],
    ["Running", "🏃‍♀️"],
    ["Fishing", "🎣"],
    ["Traveling", "🧳"],
    ["Biking", "🚴‍♀️"],
    ["Shopping", "🛍️"],
    ["Watching movies", "🎥"]
]);
  
  // Shuffle the keys of the model
  const keys = Array.from(myModel.keys());
  const shuffledKeys = shuffleArray(keys);
  
  // Create a div element to hold the randomized key-value pairs
  const randomizedKeysDiv = document.createElement("div");
  document.body.appendChild(randomizedKeysDiv);
  
  // Slice the shuffled keys to get only 7 keys
  const slicedKeys = shuffledKeys.slice(0, 7);
  
  // Loop through the sliced keys and create a span element for each key-value pair
  slicedKeys.forEach(key => {
    const value = myModel.get(key);
    const keySpan = document.createElement("span");
    keySpan.innerText = key;
  
    // Add a mouseover event listener to show the corresponding value
    keySpan.addEventListener("mouseover", () => {
      keySpan.innerText = `${key}: ${value}`;
    });
  
    // Add a mouseout event listener to hide the corresponding value
    keySpan.addEventListener("mouseout", () => {
      keySpan.innerText = key;
    });
  
    // Add a click event listener to both the key and value
    keySpan.addEventListener("click", () => {
      console.log(`Clicked ${key}: ${value}`);
    });
  
    randomizedKeysDiv.appendChild(keySpan);
    randomizedKeysDiv.appendChild(document.createElement("br"));
  });
  
  // Function to shuffle an array using Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }