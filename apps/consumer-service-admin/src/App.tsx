import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ArticleEventList } from "./articleEvent/ArticleEventList";
import { ArticleEventCreate } from "./articleEvent/ArticleEventCreate";
import { ArticleEventEdit } from "./articleEvent/ArticleEventEdit";
import { ArticleEventShow } from "./articleEvent/ArticleEventShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ConsumerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ArticleEvent"
          list={ArticleEventList}
          edit={ArticleEventEdit}
          create={ArticleEventCreate}
          show={ArticleEventShow}
        />
      </Admin>
    </div>
  );
};

export default App;
