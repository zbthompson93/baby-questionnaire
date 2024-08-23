import '../App.css';
import Typography from '@mui/material/Typography';

interface trueStatementProps {
    statement: string,
}

export default function TrueStatement({statement}: trueStatementProps) {
  return (
    <div className='intro'>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, marginTop: '20px' }}>
            {statement}
        </Typography>
    </div>
  );
}
