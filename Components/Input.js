import React from "react";
import ReactDOM, { render } from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      data: ""
    };
  }
  render() {
    let search = () => {
      try {
        dataBack = fetch(
          `https://restcountries.eu/rest/v2/name/${this.state.word}`
        )
          .then((dataFinal) => dataFinal.json())
          .then((dataFinal) => {
            this.setState({ data: dataFinal[0] });
            console.log(this.state.data);
          });
      } catch (err) {
        alert("Couldm't get data about this country. Check you spelling.");
      }
    };
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TextField
            onChange={() => this.setState({ word: event.target.value })}
            id="Search"
            label="Search"
          />
          <SearchIcon onClick={() => search()} />
        </div>
        {this.state.data ? (
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {this.state.data.alpha2Code}/{this.state.data.alpha3Code}
              </Typography>
              <Typography variant="h5" component="h2">
                {this.state.data.name}
              </Typography>
              <Typography color="textSecondary">
                Region: {this.state.data.region} <br></br>
                Sub-region: {this.state.data.subregion} <br></br>
                Area: {this.state.data.area} km<br></br>
                Timezones: {this.state.data.timezones}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default input;
