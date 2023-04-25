const ticketlist = [
  {
    id: "01",
    departure: "Hồ Chí Minh",
    destination: "Hà Nội",
    flightDate: "12-04-2023",
    flightTime: "18:45",
    landTime: "20:55",
    airline: "Vietjet Air",
    number: "VJ-154",
    price: 1132,
    image: "VietjetAir",
  },
  {
    id: "02",
    departure: "Hồ Chí Minh",
    destination: "Đà Nẵng",
    flightDate: "10-10-2023",
    flightTime: "15:05",
    landTime: "16:40",
    airline: "Vietnam Airlines",
    number: "VN-128",
    price: 2521,
    image: "VietnamAirlines",
  },
  {
    id: "03",
    departure: "Hồ Chí Minh",
    destination: "Đà Nẵng",
    flightDate: "10-10-2023",
    flightTime: "05:45",
    landTime: "07:05",
    airline: "Vietjet Air",
    number: "QH-150",
    price: 1337,
    image: "VietjetAir",
  },
  {
    id: "04",
    departure: "Hồ Chí Minh",
    destination: "Đà Nẵng",
    flightDate: "10-10-2023",
    flightTime: "05:45",
    landTime: "07:05",
    airline: "Bamboo Airways",
    number: "QH-150",
    price: 1510,
    image: "BambooAirways",
  },
  {
    id: "05",
    departure: "Hồ Chí Minh",
    destination: "Đà Nẵng",
    flightDate: "10-10-2023",
    flightTime: "05:45",
    landTime: "07:05",
    airline: "Vietjet Air",
    number: "QH-150",
    price: 2221,
    image: "VietjetAir",
  },
  {
    id: "06",
    departure: "Hồ Chí Minh",
    destination: "Đà Nẵng",
    flightDate: "10-10-2023",
    flightTime: "08:45",
    landTime: "10:05",
    airline: "Bamboo Airways",
    number: "QH-375",
    price: 1425,
    image: "BambooAirways",
  },
  {
    id: "07",
    departure: "Hồ Chí Minh",
    destination: "Hà Nội",
    flightDate: "10-10-2023",
    flightTime: "05:45",
    landTime: "07:05",
    airline: "Vietjet Air",
    number: "QH-333",
    price: 2621,
    image: "VietjetAir",
  },
  {
    id: "08",
    departure: "Hồ Chí Minh",
    destination: "Đà Nẵng",
    flightDate: "10-10-2023",
    flightTime: "04:45",
    landTime: "06:05",
    airline: "Vietjet Air",
    number: "QH-454",
    price: 1521,
    image: "VietjetAir",
  },
  {
    id: "09",
    departure: "Hồ Chí Minh",
    destination: "Hà Nội",
    flightDate: "10-10-2023",
    flightTime: "08:45",
    landTime: "09:45",
    airline: "Bamboo Airways",
    number: "QH-750",
    price: 2561,
    image: "BambooAirways",
  },
  {
    id: "10",
    departure: "Hồ Chí Minh",
    destination: "Hà Nội",
    flightDate: "10-10-2023",
    flightTime: "23:45",
    landTime: "00:45",
    airline: "Bamboo Airways",
    number: "QH-153",
    price: 1121,
    image: "BambooAirways",
  },
  {
    id: "11",
    departure: "Hồ Chí Minh",
    destination: "Hà Nội",
    flightDate: "10-10-2023",
    flightTime: "12:45",
    landTime: "13:45",
    airline: "Vietnam Airlines",
    number: "QH-152",
    price: 2021,
    image: "VietnamAirlines",
  },
  {
    id: "12",
    departure: "Hồ Chí Minh",
    destination: "Hà Nội",
    flightDate: "10-10-2023",
    flightTime: "08:45",
    landTime: "10:05",
    airline: "Vietnam Airlines",
    number: "QH-151",
    price: 1211,
    image: "VietnamAirlines",
  },
  {
    id: "13",
    departure: "Hồ Chí Minh",
    destination: "Hà Nội",
    flightDate: "16-10-2023",
    flightTime: "13:00",
    landTime: "14:05",
    airline: "Vietnam Airlines",
    number: "KD-154",
    price: 2323,
    image: "VietnamAirlines",
  },
  {
    id: "14",
    departure: "Hồ Chí Minh",
    destination: "Hà Nội",
    flightDate: "16-10-2023",
    flightTime: "16:30",
    landTime: "17:35",
    airline: "Vietnam Airlines",
    number: "KD-156",
    price: 2120,
    image: "VietnamAirlines",
  },
];

export const filterTicket = (filter) => {
  const promise = new Promise((resolve, reject) => {
    const data = ticketlist.filter(
      (item) =>
        item.departure === filter.departure &&
        item.destination === filter.destination &&
        item.price <= filter.price &&
        filter.airline.includes(item.airline) &&
        item.flightTime.slice(0, 2) >= filter.flightTime.from &&
        item.flightTime.slice(0, 2) <= filter.flightTime.to
    );
    if (filter.sort) {
      resolve(
        data.slice(0, filter.limit).sort((a, b) => {
          return a.price - b.price;
        })
      );
    } else {
      resolve(
        data.slice(0, filter.limit).sort((a, b) => {
          return b.price - a.price;
        })
      );
    }
  });
  return promise;
};

export default ticketlist;
