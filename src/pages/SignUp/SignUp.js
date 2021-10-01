import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjOne, homeObjThree } from "./Data";
function SignUp() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
