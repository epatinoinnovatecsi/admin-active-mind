import { useEffect, useState } from "react";
import AMCard from "../components/AMCard";
import MainContainer from "../layout/MainContainer";
import { axiosApiBam } from "../utils/axiosConfig";
import DatepickerModal from "../components/DatepickerModal";

const Overwrite = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axiosApiBam
      .get("/users")
      .then(({ data }) => {
        // console.log(data)
        setUsersData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <MainContainer>
      {usersData.map((user) => (
        <AMCard key={user.id} user={user}/>
      ))}
    <DatepickerModal usersData={usersData} setUsersData={setUsersData}/>
    </MainContainer>
  );
};
export default Overwrite;
