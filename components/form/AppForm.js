import React from "react";
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => <>{children}</>}
      </Formik>
    </View>
  );
}

export default AppForm;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
});
