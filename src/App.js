import Topbar from "./components/topbar/Topbar";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import TotalCheckouts from "./components/basketCard/TotalCheckouts";
import TotalFailures from "./components/basketCard/TotalFailures";
import Filter from "./components/filter/Filter";
import StripeCard from "./components/stripe/StripeCard";
import Discord from "./components/discord/Discord";
import Transfer from "./components/transfer/Transfer";
import Dashboard from "./components/dashboard/Dashboard";
import { useEffect, useState } from "react";
import Download from "./components/download/Download";

const theme = createTheme({
  palette: {
    primary: {
      main: '#202342'
    }
  }
})

function App() {
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    fetch("./assets/dummyData.json")
      .then((res) => res.json())
      .then((data) => {
        setDummyData(data.products);
      });
  }, []);
  console.log(dummyData);


  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      {/* Outer container */}
      <Grid container >
        {/* Left container */}
        <Grid container item xs={12} sm={12} md={8}>

          {/* upper left */}
          <Grid item container xs={12}>
            <Grid item xs={8} sm={3} md={4} lg={3}>
              <Filter fullWidth />
            </Grid>
            <Grid item xs={10} sm={6} md={6} lg={4}>
              <TotalCheckouts fullWidth />
            </Grid>
            <Grid item xs={10} sm={6} md={6} lg={4}>
              <TotalFailures fullWidth />
            </Grid>

          </Grid>
          {/* dashboard left*/}
          <Grid item container xs={12} >

            <Grid item xs={12} >
              <Dashboard products={dummyData} />
            </Grid>
          </Grid>

        </Grid>

        {/* RightContainer */}
        <Grid container item xs={10} sm={8} md={4}>

          <Grid item xs={12}>
            <StripeCard />
          </Grid>

          <Grid item xs={12}>
            <Discord />
          </Grid>

          <Grid item xs={12}>
            <Transfer />
          </Grid>

          <Grid item xs={12}>
            <Download />
          </Grid>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
