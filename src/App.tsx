import React, { ReactElement, useReducer, FC, useState } from "react";
import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import { DiceStatsContext } from "./context/DiceStatsContext";

import Layout from "./components/layout/Layout";

// theme
import { lightTheme, darkTheme } from "./theme/appTheme";

// app routes
import { routes } from "./config/routes";

// constants
import { APP_TITLE } from "./utils/constants";

// interfaces
import RouteItem from "./model/RouteItem.model";

// default component
const DefaultComponent: FC<{}> = (): ReactElement => (
  <div>{`No Component Defined.`}</div>
);

const App = () => {
  const [useDefaultTheme, toggle] = useReducer((theme) => !theme, true);
  const [throwMethod, setThrowMethod] = useState("Random");

  // define custom theme
  let theme: Theme = createMuiTheme(useDefaultTheme ? lightTheme : darkTheme);
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <DiceStatsContext.Provider value={{ throwMethod, setThrowMethod }}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Layout toggleTheme={toggle} useDefaultTheme={useDefaultTheme}>
                {/* for each route config, a react route is created */}
                {routes.map((route: RouteItem) => (
                  <Route
                    key={`${route.key}`}
                    path={`${route.path}`}
                    component={route.component || DefaultComponent}
                    exact
                  />
                ))}
              </Layout>
            </Switch>
          </Router>
        </ThemeProvider>
      </DiceStatsContext.Provider>
    </>
  );
};

export default App;
