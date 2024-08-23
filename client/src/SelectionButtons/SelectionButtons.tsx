import '../App.css';
import Button from '@mui/material/Button';

export default function SelectionButtons() {
  return (
    <>
        <div className="buttons-vert-line"></div>
        <div className="buttons-box-lines"></div>
        <div className="yes-no-btns-div">
            <Button variant="outlined" color="success" size="large" className="yesBtn">Yes</Button>
            <div style={{flex: 1, maxWidth: '120px'}}></div>
            <Button variant="outlined" color="error" size="large" className="noBtn">No</Button>
        </div>
    </>
  );
}
