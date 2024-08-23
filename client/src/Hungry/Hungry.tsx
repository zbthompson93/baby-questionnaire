import '../App.css';
import Typography from '@mui/material/Typography';
import SelectionButtons from '../SelectionButtons/SelectionButtons';

interface hungryProps {
    yes: (Status: boolean) => void,
    no: (Status: boolean) => void,
    hide: (Status: boolean) => void,
}

export default function Hungry({yes, no, hide}: hungryProps) {
  return (
    <div className='intro'>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
            Is the baby hungry?
        </Typography>
        
        <SelectionButtons yesFxn={yes} noFxn={no} hideFxn={hide} />
    </div>
  );
}
