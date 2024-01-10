import axios from "axios";
import { useEffect, useState } from "react";
import { ListingsInterface } from "../types";
import Card from "../components/Card";
import SearchListingsForm from "../components/SearchListingsForm";

const Homepage = () => {
  const [listings, setListings] = useState<ListingsInterface[]>([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/listings/");

        // console.log("response");
        console.log(res.data);
        setListings([...res.data.results]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchListings();
  }, []);
  return (
    <>
      <div className="bg-gray-200 px-8 py-12 lg:px-12 space-y-6">
        <SearchListingsForm />
      </div>
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
    </>
  );
};

export default Homepage;
