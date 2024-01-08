import axios from "axios";
import { useEffect, useState } from "react";
import { ListingsInterface } from "../types";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Listings = () => {
  const [listings, setListings] = useState<ListingsInterface[]>([]);
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/listings/");

        console.log("response");
        console.log(res.data);
        setListings([...res.data.results]);
        setCount(res.data.count);
        setPrevious(res.data.previous);
        setNext(res.data.next);
      } catch (error) {}
    };

    fetchListings();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-8">
        {listings.map((listing: ListingsInterface, index) => {
          return (
            <Card
              key={index}
              title={listing.title}
              address={listing.address}
              city={listing.city}
              state={listing.state}
              price={listing.price}
              sale_type={listing.sale_type}
              home_type={listing.home_type}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              sqft={listing.sqft}
              photo_main={listing.photo_main}
              slug={listing.slug}
            />
          );
        })}
      </div>

      {/* Pagination */}
      <div className="px-8 pb-8">
        <Pagination
          itemsPerPage={3} // In backend, we have set Pagination to display 3 items per page
          count={count}
          previous={previous}
          next={next}
        />
      </div>
    </>
  );
};

export default Listings;
