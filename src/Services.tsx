import * as React from "react";
import vehicles from "./vehicles.json";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import newdata from "./csvjson.json";

const queryClient = new QueryClient()

const ReactQueryDevtoolsProduction = React.lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
)

declare global {
    interface Window {
        toggleDevtools: () => void;
    }
}

function Services() {
    const [showDevtools, setShowDevtools] = React.useState(false)

    React.useEffect(() => {
        window.toggleDevtools = () => setShowDevtools((old) => !old)
    }, [])

    const data = vehicles.vehicles;

    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredData, setFilteredData] = React.useState<Array<any>>([]);

    function updateSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const searchTerms = query.split(/;|,| /);

        const results = data.filter((item => {
            for (let searchTerm of searchTerms) {
                return (
                    item.brand.toLowerCase().includes(searchTerm) ||
                    item.model.toLowerCase().includes(searchTerm) ||
                    item.type.toLowerCase().includes(searchTerm) ||
                    item.version.toLowerCase().includes(searchTerm));
            }

        }));
        setFilteredData(results);
    };

    const brands: string[] = ["sunner", "winter", "august"];
    newdata.forEach((i) => {
        if (!brands.includes(i.brand)) {
            brands.push(i.brand)
        }
    })

    // SEARCH FUNCTION
    {/* <div className="searchPage">

            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen />
                {showDevtools && (
                    <React.Suspense fallback={null}>
                        <ReactQueryDevtoolsProduction />
                    </React.Suspense>
                )}
            </QueryClientProvider>
            <input
                type="text"
                placeholder="Search..."
                className="searchBar"
                onChange={updateSearch} />
            <br />
            <p>Searching: {searchQuery}</p>
            <div>
                {filteredData.map((item) => (
                    <div className="searchResult">
                        <a
                            href={"/service/" + item.brand + "/" + item.model}
                            key={item.brand}>
                            {item.brand} ({item.model})
                        </a>
                        <br /></div>
                ))}
            </div>
        </div> */}

    return (
        <div className="m-8">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <h1 className="text-5xl mb-5">ECU Tuning Automobile</h1>
            <p className="text-xl">Discover all the potential and possibilities offered to your vehicle in our car reprogramming catalog. Each available course is listed in our database with all the options available, if you cannot find your vehicle in the list do not hesitate to contact us .</p>
            <div className="">
                <button className="button-ecu text-2xl">Brand</button>
                <span className="material-symbols-outlined">arrow_forward_ios</span>
                <button className="button-ecu text-2xl">Model</button>
                <span className="material-symbols-outlined">arrow_forward_ios</span>
                <button className="button-ecu text-2xl">Year</button>
                <span className="material-symbols-outlined">arrow_forward_ios</span>
                <button className="button-ecu text-2xl">Engine</button>
                <span className="material-symbols-outlined">arrow_forward_ios</span>
                <button className="button-ecu text-2xl">Configuration</button>
            </div>
            <div>
                <p>Select your brand</p>
                <div className="grid grid-cols-4 grid-flow-row grid-rows-4  gap-4">
                    {brands.map((i) => (<div className="button-brand" key={i}> {i} </div>))}
                </div>
            </div>
        </div >
    )
}

const SearchResult = () => {
    return (
        <div className="searchBox">

        </div>
    )
}

export default Services;