import React, { useState } from "react";
import "./styles.css";

var songsDictionary = {
  Hindi: [
    {
      song: "Abhi Kuchh Dino se",
      rating: "4.8/5"
    },

    {
      song: "Sau Aasmaan",
      rating: "4.6/5"
    },

    {
      song: "Saibo",
      rating: "4.5/5"
    },

    {
      song: "Tu Hi Haqeeqat",
      rating: "4.7/5"
    },

    {
      song: "Piya Tose Naina Laage Re",
      rating: "4.4/5"
    }
  ],

  Punjabi: [
    {
      song: "Waalian",
      rating: "4.4/5"
    },

    {
      song: "Saanu Nehar Waale Pul Tu Bulake",
      rating: "4.4/5"
    },

    {
      song: "Gal Karke",
      rating: "4.3/5"
    },

    {
      song: "Naah",
      rating: "4.6/5"
    },

    {
      song: "Jhanjhar",
      rating: "4.8/5"
    }
  ],

  English: [
    {
      song: "Seeing Blind",
      rating: "4.5/5"
    },

    {
      song: "Invested",
      rating: "4.6/5"
    },

    {
      song: "Photograph",
      rating: "4.8/5"
    },

    {
      song: "Blank Space",
      rating: "4.7/5"
    },

    {
      song: "Perfect",
      rating: "4.8/5"
    }
  ]
};

export default function App() {
  var [songLanguage, setSongLanguage] = useState("English");
  function clickEventHandler(songLanguage) {
    setSongLanguage(songLanguage);
  }

  return (
    <div className="App">
      <header>Mesmerising Music Playlist</header>
      <p>See my favourite music playlist. Choose language to get started.</p>

      {Object.keys(songsDictionary).map((songLanguage) => {
        return (
          <button
            onClick={() => clickEventHandler(songLanguage)}
            key={songLanguage}
          >
            {songLanguage}
          </button>
        );
      })}

      {/* <hr /> */}

      {songsDictionary[songLanguage].map((data) => {
        return (
          <ul className="list-style">
            <li>
              <div className="song-list">
                <div className="song">
                  <h2>{data.song}</h2>
                  <p>{data.rating}</p>
                </div>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
