import React from "react";
import TicketList from "./TicketList";
import JournalEntries from "./JournalEntries"
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Hello from './Hello';

function App(){
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={TicketList} />
      <Route exact path='/newticket' component={NewTicketForm} />
      <Route exact path='/hello' component={Hello} />
      <Route exact path='/journal' component={JournalEntries} />
    </Switch>
    </div>
  );
}

export default App;
