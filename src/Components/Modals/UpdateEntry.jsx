import PropTypes from "prop-types";
import { useState } from "react";

const UpdateEntry = ({ name, url, username, password, type }) => {
  const [updateData, setUpdateData] = useState({
    name: name,
    url: url,
    username: username,
    password: password,
    type: type,
  });

  function setNameChangeHandler(e) {
    setUpdateData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  }

  function setUrlChangeHandler(e) {
    setUpdateData((prevData) => ({
      ...prevData,
      url: e.target.value,
    }));
  }

  function setUsernameChangeHandler(e) {
    setUpdateData((prevData) => ({
      ...prevData,
      username: e.target.value,
    }));
  }

  function setPasswordChangeHandler(e) {
    setUpdateData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
  }

  function setTypeChangeHandler(e) {
    setUpdateData((prevData) => ({
      ...prevData,
      type: e.target.value,
    }));
  }

  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          value={updateData.name}
          onChange={setNameChangeHandler}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
        />
        <input
          type="url"
          value={updateData.url}
          onChange={setUrlChangeHandler}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
        />
        <input
          type="text"
          value={updateData.username}
          onChange={setUsernameChangeHandler}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
        />
        <input
          type="password"
          value={updateData.password}
          onChange={setPasswordChangeHandler}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
        />
        <select
          value={updateData.type}
          onChange={setTypeChangeHandler}
          className="px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
        >
          <option value="Website">Website</option>
          <option value="Application">Application</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button className="mt-4 w-full bg-blue-9 text-white py-2 rounded-lg hover:bg-blue-10 transition-colors">
        Modifier
      </button>
    </>
  );
};
export default UpdateEntry;

UpdateEntry.prototype = {
  name: PropTypes.string,
  url: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  type: PropTypes.string,
};
