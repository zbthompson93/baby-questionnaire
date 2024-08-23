import '../App.css';
import Button from '@mui/material/Button';

interface buttonProps {
    yesFxn: (Status: boolean) => void,
    noFxn: (Status: boolean) => void,
    hideFxn: (Status: boolean) => void,
}

export default function SelectionButtons({yesFxn, noFxn, hideFxn}: buttonProps) {
    const clickYes = (): void => {
        yesFxn(true);
        hideFxn(false);
    }

    const clickNo = (): void => {
        noFxn(true);
        hideFxn(false);
        console.log("Noooooooo!!!!!")
    }

    return (
        <>
            <div className="buttons-vert-line"></div>
            <div className="buttons-box-lines"></div>
            <div className="yes-no-btns-div">
                <Button 
                    variant="outlined" 
                    color="success" 
                    size="large" 
                    className="yesBtn"
                    onClick={clickYes}
                >
                    Yes
                </Button>
                <div style={{flex: 1, maxWidth: '120px'}}></div>
                <Button 
                    variant="outlined" 
                    color="error" 
                    size="large" 
                    className="noBtn"
                    onClick={clickNo}
                >
                    No
                </Button>
            </div>
        </>
    );
}
