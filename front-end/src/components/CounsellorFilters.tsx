import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import "../styles/counsellor-filters.css"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

function CounsellorFilters() {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // setAge(event.target.value as string);
  
    

    return (
        <form>
            <div className="services">
                <h3 className="filter-title">Services:</h3>
                <FormGroup row>
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedA" />}
                    label="Custom color"
                />
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                    label="Custom color"
                />
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                    label="Custom color"
                />
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                    label="Custom color"
                />
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                    label="Custom color"
                />
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                    label="Custom color"
                />
                </FormGroup>

                <h3 className="filter-title">Hourly rate:</h3>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            // onChange={handleChange}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                </FormControl>

            

            </div>
            
        </form>
    )
}

export default CounsellorFilters