"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
    const [country, setCountry] = useState('United States');
    useEffect(()=>{
        fetch(
          `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => setCountry(data.country));
    }, []);

  return (
    <div>{country}</div>
  )
}
