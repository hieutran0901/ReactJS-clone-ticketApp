import React, { createContext, useEffect, useState } from "react";
// import searchApi from "../api/searchApi";
import ticketlist, { filterTicket } from "../assets/fake-data/flightticketlist";

export const TickerContext = createContext();

const TickerContextProvider = ({ children }) => {
  const [tickerLoading, setTickerLoading] = useState(true);
  const [listTickerSearch, setListTickerSearch] = useState([]);
  const [filter, setFilter] = useState({
    departure: "Hồ Chí Minh",
    destination: "Hà Nội",
    flightDate: "2023-04-15",
    price: 3000,
    flightTime: { from: 0, to: 24 },
    airline: ["Vietnam Airlines", "Vietjet Air", "Bamboo Airways"],
    limit: 3,
    sort: true,
  });
  const subMitForm = (value) => {
    const { departure, destination, flightDate } = value;
    setFilter({ ...filter, departure, destination, flightDate });
  };
  let timer = null;
  useEffect(() => {
    // console.log(filter.date)
    const fetchAPI = async () => {
      try {
        setTickerLoading(true);
        timer = setTimeout(async () => {
          const res = await filterTicket(filter);
          // const res = await searchApi.postSearch(filter);
          // console.log(res.data)
          setListTickerSearch(res);
          setTickerLoading(false);
        }, 1000);
      } catch (error) {
        setTickerLoading(false);
      }
    };
    fetchAPI();
    //Clean up current Timeout
    return () => {
      clearTimeout(timer);
    };
  }, [filter]);

  const TickerContextData = {
    subMitForm,
    listTickerSearch,
    tickerLoading,
    filter,
    setFilter,
    ticketlist,
  };
  return <TickerContext.Provider value={TickerContextData}>{children}</TickerContext.Provider>;
};

export default TickerContextProvider;
