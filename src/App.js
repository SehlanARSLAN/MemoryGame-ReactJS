import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { resetGame } from './redux/GameSlice';
import Board from './components/Board';

function App() {
  const dispatch = useDispatch();
  const score = useSelector((state)=> state.game.score);
  const cards = useSelector((state)=> state.game.cards);

  const allMatched = cards.every((card)=> card.isMatched)


  return (
    <div className="App">
      <h1>Hafıza Oyunu</h1>
      <p>Puan: {score}</p>
      <Board/>
      {allMatched && <button onClick={()=> dispatch(resetGame())}>Yeniden Oyna</button>}
    </div>
  );
}

export default App;
