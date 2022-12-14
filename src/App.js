import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "đ": "Laughing with tears",
  "đ": "Blushing",
  "đ¤Ł": "Laughing hard",
  "đ": "Lovi'n it",
  "đ": "Feeling bored",
  "đ": "All good",
  "đ": "Kisses",
  "đ": "Laughing",
  "đ": "Ok",
  "đ": "cheer up",
  "đ": "Blink",
  "đ˘": "Sad and Crying",
  "đĽ°": "Feeling Loved",
  "đ": "Whatever",
  "đ": "Huhh!",
  "đ¤": "Shut up",
  "đ´": "Sleeping",
  "đĽą": "Felling Sleepy",
  "đ": "confused",
  "đ¤": "Money in my mind",
  "đŤ ": "It is what it is",
  "đ­": "Crying",
  "đĄ": "Angry",
  "đ¤Ź": "Angry and abusing",
  "đ¤": "Felling ill"
};

var emojiWeKnow = Object.keys(emojiDictionary);

var headingText = "KnđŁw Your Emoji";

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
