import React from "react";
import { useFormikContext } from "formik";

import PrimaryButton from "../PrimaryButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <PrimaryButton onPress={handleSubmit} title={title} />;
}

export default SubmitButton;
