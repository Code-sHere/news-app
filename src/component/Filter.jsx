import React, { useMemo } from 'react'
import { useNewsContext } from '../context/Newscontext';

function Country() {

    const {fetchNews, setnews} = useNewsContext();

    const sourceCountryMap = {
        "CNN": "United States",
        "CBS Sports": "United States",
        "Fox News": "United States",
        "New York Post": "United States",
        "USA Today": "United States",
        "NBC Chicago": "United States",

        "The Times of India": "India",
        "The Indian Express": "India",
        "BusinessLine": "India",

        "BBC News": "United Kingdom",
        "Independent.ie": "Ireland",

        "Al Jazeera English": "Qatar",
        "RT": "Russia",

        "The Star Online": "Malaysia",
        "HuffPost": "United States",
        "Reuters": "United Kingdom",

        "Punch Newspapers": "Nigeria"
    };

    const countries = useMemo(()=>{
        return [...new Set(Object.values(sourceCountryMap))];
    },[])

    const handleCountryClick = async (Country) =>{
        const data = await fetchNews(`/everything?q=${Country}`);
        setnews(data?.articles);
    }

    return (

        <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        Country
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[60] w-52 p-2 shadow"
      >
        {countries.map((country, index) => (
          <li key={index}>
            <button
              onClick={() => handleCountryClick(country)}
              className="capitalize"
            >
              {country}
            </button>
          </li>
        ))}
      </ul>
    </div>

    )
}

export default Country
