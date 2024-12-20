import { useEffect, useState } from "react";
import { api } from "../../api/api";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthenticateContext } from "../../Context/AuthenticateContext";

export function useUserData() {
  const [data, setData] = useState({ userPseudo: "", userEmail: "" });
  const { id } = useContext(AuthenticateContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.user.getOneUser(id);
        console.log("response", response);

        setData(response);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  console.log(data);

  return { data };
}
