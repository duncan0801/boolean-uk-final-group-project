import React from 'react';
import "../styles/counsellor-filters.css"
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import useStore from '../store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(5),
      width: "100%",
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }),
);

const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
    },
  },
};

const services = [
  "Anxiety",
	"Depression",
	"Addiction",
	"ADHD",
	"Anger management",
	"Bereavement",
	"Bullying",
	"Cancer",
	"Child related issues",
	"Depression",
	"Discrimination",
	"Drug addiction",
	"Panic attacks",
	"Postnatal depression",
	"Relationship problems",
	"Separation and divorce",
	"Stress",
	"Trauma",
]

function getStylesForServices(service: string, serviceName: string[], theme: Theme) {
  return {
    fontWeight:
      serviceName.indexOf(service) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



const languages = [
  "English",
  "French",
  "Russian",
];



function getStylesForLanguages(language: string, languageName: string[], theme: Theme) {
  return {
    fontWeight:
      languageName.indexOf(language) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function CounsellorFilters() {

  const counsellors = useStore((store) => store.counsellors)
  console.log(counsellors)

  const classes = useStyles();
  const theme = useTheme();

  const [serviceName, setServiceName] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setServiceName(event.target.value as string[]);
  };

  const handleChangeMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { options } = event.target as HTMLSelectElement;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setServiceName(value);
  };





  // function valuetext(value: number) {
  //   return `£${value}`;
  // }

  // // {const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // //   setState({ ...state, [event.target.name]: event.target.checked });
  // // };

  // // const { gilad, jason, antoine } = state;
  // // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  // const marks = [
  //   {
  //     value: 30,
  //     label: '£30',
  //   },
  //   {
  //     value: 50,
  //     label: '£50',
  //   },
  //   {
  //     value: 70,
  //     label: '£70',
  //   },
  //   {
  //     value: 100,
  //     label: '£100',
  //   },
  // ];

  // const [value, setValue] = React.useState('female');

  // // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // //   setValue((event.target as HTMLInputElement).value);

  // const [age, setAge] = React.useState('');
  // // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  // //   setAge(event.target.value as string);
  // // };

  // const [personName, setPersonName] = React.useState<string[]>([]);

  // // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  // //   setPersonName(event.target.value as string[]);
  // // };

  // // const handleChangeMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
  // //   const { options } = event.target as HTMLSelectElement;
  // //   const value: string[] = [];
  // //   for (let i = 0, l = options.length; i < l; i += 1) {
  // //     if (options[i].selected) {
  // //       value.push(options[i].value);
  // //     }
  // //   }
  // //   setPersonName(value);
  // // };

  
  
  

  return (
  
    <form className="counsellor-filters">
      {/* filter by service */}
      <div className="services">
        <div className={classes.root}>
          <FormLabel component="legend">Services:</FormLabel>
          <FormControl className={classes.formControl}>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={serviceName}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {(selected as string[]).map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {services.map((service) => (
              <MenuItem key={service} value={service} style={getStylesForServices(service, serviceName, theme)}>
                {service}
              </MenuItem>
            ))}
          </Select>
      </FormControl>
        </div>
      </div>
      {/* <div className="hourly-rate">
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
    <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          // onChange={handleChangeMultiple}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {languages.map((language) => (
            <MenuItem key={language} value={language} style={getStylesForLanguages(language, languageName, theme)}>
              {language}
            </MenuItem>
          ))}
        </Select>
   </div>
  </form>

)} */}
</form>

)}

export default CounsellorFilters


