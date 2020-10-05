import React from "react";
import Header from "../Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./route";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Header titleName="Anniversaire Maman"></Header>
        <BrowserRouter>
          <Switch>
            {Object.keys(routes).map((routeName) => {
              const { path, component } = routes[routeName];
              return (
                <Route exact path={path} component={component} key={path} />
              );
            })}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
