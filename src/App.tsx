import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Menu from './components/Menu'
import Button from './components/Button'
import TextField from './components/TextField'
import Label from './components/Label'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0A84FF',
    }
  },
  typography: {
    fontWeightMedium: 500
  },
  spacing: 8,
  shape: {
    borderRadius: 4
  }
});

function App() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Pedestrian' },
    { key: 1, label: 'Truck' },
    { key: 2, label: 'Tree' },
    { key: 3, label: 'Hard break' },
  ]);

  const navItems = [
    {
      itemName: 'Dashboard',
      items: [

      ]
    }
  ]

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Menu />
        <Container maxWidth={false}>
          <h1>Components Preview</h1>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item xs>
              <h2>Buttons</h2>
              <p>
                <Button type="primary">Primary Button</Button>
              </p>
              <p>
                <Button type="secondary">Secondary Button</Button>
              </p>
            </Grid>
            <Grid item xs>
              <h2>Text Fields</h2>
              <p>
                <TextField type="standard" helpText="Some helper text here" />
              </p>
              <p>
                <TextField type="search" />
              </p>
            </Grid>
            <Grid item xs>
              <h2>Labels</h2>
              <Paper component="ul">
                {chipData.map((data) => {
                  return (
                    <Label text={data.label} />
                  )
                })}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
