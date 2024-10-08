import '../App.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SelectionButtons from '../SelectionButtons/SelectionButtons';

interface introProps {
    yes: (Status: boolean) => void,
    no: (Status: boolean) => void,
    hide: (Status: boolean) => void,
}

export default function Intro({yes, no, hide}: introProps) {
  return (
    <div className='intro'>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            Welcome to the Thunderdome!
        </Typography>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
            Do you dare to enter the Baby Questionnaire?
        </Typography>

        <SelectionButtons yesFxn={yes} noFxn={no} hideFxn={hide} />
    </div>
  );
}
