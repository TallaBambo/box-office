import React, { useEffect, useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/show/ShowGrid";
import { apiGet } from "../misc/config";
import { useShows } from "../misc/custom-hooks";

const Starred = () => {

    const [starred] = useShows()
    const [shows, setShows] = useState(null)
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (starred && starred.length > 0) {
            const promises = starred.map(showId => apiGet(`/show/${showId}`))

            Promise.all(promises)
                .then(apiData => apiData.map(show => ({ show })))
                .then(results => {
                    setShows(results)
                    setIsloading(false)
                }).catch(err => {
                    setError(err.message)
                    setIsloading(false)
                })

        } else {

            setIsloading(false)

        }
    }, [starred])
    return (
        <MainPageLayout>
            {isLoading && <div>Shows are still loading</div>}
            {error && <div>Error occured: {error}</div>}
            {!isLoading && !shows && <div>No shows were added</div>}
            {!isLoading && !error && shows && <ShowGrid data={shows} />}
        </MainPageLayout>
    )
}

export default Starred