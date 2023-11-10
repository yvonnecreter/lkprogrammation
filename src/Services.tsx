import * as React from "react";
import vehicles from "./vehicles.json";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

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


    return (
        <div className="searchPage">

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

            {/* Results:
            {JSON.stringify(filteredData)}
            {filteredData.map((item) => (
                <div key={item.brand}>{item.brand} ({item.model})</div>
            ))}
            <br />
            Available Data: {JSON.stringify(data)} */}
        </div>
    )
}

const SearchResult = () => {
    return (
        <div className="searchBox">

        </div>
    )
}

export default Services;