import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { LogBox } from 'react-native';
import { COLORS } from './src/constants/Constants';

const App = () => {
  LogBox.ignoreAllLogs();

  // const [isDBInitilised, setIsDBInitilised] = useState(false);

  // useEffect(() => {
  //   const stablistDBConnection = async (isNetworkAvailable) => {
  //     //
  //     try {
  //       const realmConnectionObject = {
  //         schema: CombinedSchema,
  //         schemaVersion: SchemaVersion,
  //       };
  //       if (!global.realm && !isDBInitilised) {
  //         Realm.open(realmConnectionObject).then((realm) => {
  //           setIsDBInitilised(true);
  //           const payload = {
  //             isNetworkAvailable,
  //             realm,
  //           };
  //           dispatch(AppInitCreator.initialAppData(payload));
  //         });
  //       }
  //     } catch (err) {}
  //   };

  //   !isDBInitilised && stablistDBConnection(payload.isNetworkAvailable);

  //   const disconnetDBConnection = () => {
  //     if (global?.realm?.close) {
  //       global.realm.close();
  //       global.realm = null;
  //     }
  //   };
  //   return disconnetDBConnection();
  // }, [isDBInitilised]);

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.PRIMARY_BACKGROUND_COLOR}
        translucent={true}
        barStyle="light-content"
      />
      <Navigation />
    </>
  );
};

export default App;
