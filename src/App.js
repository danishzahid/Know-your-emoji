import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "Laughing with tears",
  "😊": "Blushing",
  "🤣": "Laughing hard",
  "😍": "Lovi'n it",
  "😒": "Feeling bored",
  "👌": "All good",
  "😘": "Kisses",
  "😁": "Laughing",
  "👍": "Ok",
  "🙌": "cheer up",
  "😉": "Blink",
  "😢": "Sad and Crying",
  "🥰": "Feeling Loved",
  "🙄": "Whatever",
  "😏": "Huhh!",
  "🤐": "Shut up",
  "😴": "Sleeping",
  "🥱": "Felling Sleepy",
  "🙃": "confused",
  "🤑": "Money in my mind",
  "🫠": "It is what it is",
  "😭": "Crying",
  "😡": "Angry",
  "🤬": "Angry and abusing",
  "🤒": "Felling ill"
};

var emojiWeKnow = Object.keys(emojiDictionary);

var headingText = "Kn😣w Your Emoji";

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input onChange={emojiChangeHandler}></input>
      <div style={{ fontSize: "large", margin: "1rem" }}>{meaning}</div>
      <h2>Emojis we know</h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
