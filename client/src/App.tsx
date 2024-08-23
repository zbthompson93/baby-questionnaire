import { useState, useEffect } from 'react';
import './App.css';
import Intro from './Intro/Intro';
import Hungry from './Hungry/Hungry';
import Button from '@mui/material/Button';
import TrueStatement from './TrueStatement/TrueStatement';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('Intro');
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [showBabyIsFine, setShowBabyIsFine] = useState<boolean>(false);
  const [showHungry, setShowHungry] = useState<boolean>(false);
  const [showHungryIsTrue, setShowHungryIsTrue] = useState<boolean>(false);
  const [showBathroom, setShowBathroom] = useState<boolean>(false);

  const goHome = (input: string): void => {
    switch(input) {
      case "BabyIsFine":
        setShowBabyIsFine(false);
        break;
      case "Hungry":
        setShowHungry(false);
        break;
      case "HungryIsTrue":
        setShowHungryIsTrue(false);
        break;
      default:
        console.log(0)
    }

    setShowIntro(true);
  }

  const goBack = (current: string): void => {
    switch(current) {
      case "BabyIsFine":
        setShowBabyIsFine(false);
        setShowIntro(true)
        break;
      case "Hungry":
        setShowHungry(false);
        setShowIntro(true)
        break;
      case "HungryIsTrue":
        setShowHungryIsTrue(false);
        setShowHungry(true);
        break;
      default:
        console.log(0)
    }
  }
    
  useEffect((): void => {
    if(showBabyIsFine){
      setCurrentPage("BabyIsFine");
    } else if(showHungry){
      setCurrentPage("Hungry");
    } else if(showHungryIsTrue){
      setCurrentPage("HungryIsTrue");
    }
  });


  return (
    <>
    {!showIntro ?
      <div className="yes-no-btns-div">
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          className="yesBtn"
          onClick={() => goHome(currentPage)}
        >
          Restart
        </Button>
        <div style={{flex: 1, maxWidth: '120px'}}></div>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          className="noBtn"
          onClick={() => goBack(currentPage)}
        >
          Back
        </Button>
      </div>
      : null
    }
    {showIntro ? 
        <Intro yes={setShowHungry} no={setShowBabyIsFine} hide={setShowIntro} />
      : showBabyIsFine ?
        <TrueStatement statement="Your baby must be doing well! Enjoy it while it lasts..." />
      : showHungry ?
        <Hungry yes={setShowHungryIsTrue} no={setShowBathroom} hide={setShowHungry} />
      : showHungryIsTrue ?
        <TrueStatement statement="Feed that baby!" />
      : null
    }
    </>
  );
}

export default App;
