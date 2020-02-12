import React from "react";
import Journal from "./Journal";

var journalEntries = [
  {
    author: 'Dr. Malcom',
    date: '2/12/2020',
    entry: 'Well, we are back at it again with the Dinos. Yikes..'
  },
  {
    author: 'Dr. Grant',
    date: '2/12/2020',
    entry: 'I cant stand Dr. Malcom.'
  },
  {
    author: 'Tim',
    date: '2/12/2020',
    entry: 'Pretty cool watching Dr. Grant be annoyed'
  }
];

function JournalEntries(){
  return (
    <div>
    <hr/>
    {journalEntries.map((journal, index) =>
      <Journal author={journal.author}
      date={journal.date}
      entry={journal.entry}
      key={index} />
    )}
    </div>
  );
}
export default JournalEntries;
