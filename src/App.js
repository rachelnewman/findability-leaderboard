import React from 'react';
import * as Styled from './styles.js'
import { Table } from './Table/Table.js';

function App() {
  return (
    <div className="App">
      <Styled.Header className="App-header">
				<h2>Findability Quiz Leaderboard</h2>
      </Styled.Header>
			<Table />

    </div>
  );
}

export default App;
