import { useState } from "react";
import { checkPwd } from "../../libs/function";

function CheckElement() {
  const [pwd, setPwd] = useState("");
  const [strength, setStrength] = useState("");

  const setPwdHandler = (e) => {
    console.log(e.target.value);

    setPwd(e.target.value);
    setStrength(checkPwd(e.target.value));
  };

  return (
    <div>
      <input
        className="bg-black text-white"
        type="text"
        value={pwd}
        onChange={setPwdHandler}
      />
      <p>{strength}</p>
    </div>
  );
}

export default CheckElement;
