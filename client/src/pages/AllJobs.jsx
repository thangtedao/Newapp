import { useLoaderData } from "react-router-dom";
import { SearchContainer, JobContainer } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { createContext, useContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/job/get/all");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// context như props, truyền các data cho các component con
const AllJobsContext = createContext();

const AllJobs = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
