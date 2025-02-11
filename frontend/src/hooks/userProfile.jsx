import { useEffect } from "react";
import axios from "axios";
import { userPort } from "../utilites/Detailport";
import { useDispatch } from "react-redux";
import { profile } from "../redux/userSlice";

function useUserProfile(id) {
  const dispatch = useDispatch();
    const getDataForProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/user/v1/api/getprofile/67a854e5738146f96354c335`
        );
        console.log(res.data.user);
        dispatch(profile(res.data.user)); // Use res.data, not res
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

getDataForProfile()  
}

export default useUserProfile;
