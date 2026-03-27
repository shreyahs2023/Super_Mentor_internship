import React, { useState } from "react";

function MoodTracker() {
  const [mood, setMood] = useState("Neutral");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mood Tracker</h1>

      <h2>Current Mood: {mood}</h2>

      <button onClick={() => setMood("Happy")}>😊 Happy</button>
      <button onClick={() => setMood("Sad")}>😢 Sad</button>
      <button onClick={() => setMood("Excited")}>😃 Excited</button>
      <button onClick={() => setMood("Angry")}>😠 Angry</button>
    </div>
  );
}

export default MoodTracker;