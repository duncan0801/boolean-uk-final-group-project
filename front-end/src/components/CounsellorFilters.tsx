import React from 'react';
import "../styles/counsellor-filters.css"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,

    },
    selectEmpty: {
      marginTop: theme.spacing(5),
      width: "100%",
    },
  }),
);

function CounsellorFilters() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  // {const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const marks = [
    {
      value: 30,
      label: '£30',
    },
    {
      value: 50,
      label: '£50',
    },
    {
      value: 70,
      label: '£70',
    },
    {
      value: 100,
      label: '£100',
    },
  ];

  function valuetext(value: number) {
    return `£${value}`;
  }

  const [value, setValue] = React.useState('female');

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue((event.target as HTMLInputElement).value);

  const [age, setAge] = React.useState('');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  

  return (
    <form className="counsellor-filters">
      <div className="services">
        <div className={classes.root}>
          <FormLabel component="legend">Services:</FormLabel>
          <FormControl required error={error} component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                label="Gilad Gray"
              />
              <FormControlLabel
                control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                label="Jason Killian"
              />
              <FormControlLabel
                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                label="Antoine Llorca"
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>
      <div className="hourly-rate">
        <div className={classes.root}>
          <Typography id="discrete-slider-custom" gutterBottom>
            Hourly rate:
          </Typography>
          <Slider
            defaultValue={20}
            // getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </div>
    </div>
    <div className="gender">
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel value="other" control={<Radio />} label="No preference" />
        </RadioGroup>
      </FormControl>
    </div>
    <div className="years-of-experience">
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Years of experience:
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        marks
        min={0}
        max={40}
      />
      
    </div>
      </div>
    
    <div className="languages">
      <FormLabel component="legend">Languages:</FormLabel>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
   </div>
  </form>
)}

export default CounsellorFilters