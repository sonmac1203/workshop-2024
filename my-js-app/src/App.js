import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const BEFORE_CLICK = 'CLICK MEE';
  const AFTER_CLICK = 'ALREADY CLICKED';

  const [buttonText, set] = useState(BEFORE_CLICK);

  const [isPretty, setIsPretty] = useState(false);

  const fetchData = () => {
    return [
      { id: '1', description: 'Join React workshop.' },
      { id: '2', description: 'Spam anh Khoa.' },
      { id: '3', description: 'Sign OpenAI offer.' },
    ];
  };

  useEffect(() => {
    const data = fetchData();

    console.log(data);
  }, []);

  // 1000 entries

  //GOAL: If I click on CLICK ME, it changes to ALREADY CLICKED

  const handleClick = () => {
    set(AFTER_CLICK);
    setIsPretty(true);
  };

  return (
    <div className='App'>
      <NewBanner title='Anh KHOA' />
      <br />
      {/* {dummyData.map((item, key) => {
        return <p key={key}>{item.description}</p>;
      })} */}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

function add(a, b) {
  return a + b;
}

// function NewBanner(props) {

// }

// props = {
//   title: ...
//}

const NewBanner = ({ title }) => {
  return <h4>{title}</h4>;
};

export default App;
