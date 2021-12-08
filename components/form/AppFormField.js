import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

function AppFormField({
  name,
  width,
  textArea,
  typeDataHook,
  typeNumber,
  valueToShow,
  styleContainerInput,
  ...otherProps
}) {
  const { setFieldTouched, setFieldValue, errors, touched } =
    useFormikContext();
  const [text, setText] = useState(null);

  useEffect(() => {
    if (valueToShow) {
      setFieldValue(name, valueToShow);
    }
  }, [valueToShow]);

  return (
    <>
      {typeDataHook ? (
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={(value) => {
            setText(value);
            setFieldValue(name, value);
            typeDataHook(typeNumber ? Number(value) : value);
          }}
          width={width}
          textArea={textArea}
          styleContainerInput={styleContainerInput}
          {...otherProps}
          value={text === null ? valueToShow : text}
        />
      ) : (
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={(value) => {
            setText(value);
            setFieldValue(name, value);
          }}
          width={width}
          textArea={textArea}
          styleContainerInput={styleContainerInput}
          {...otherProps}
          value={text === null ? valueToShow : text}
        />
      )}
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
