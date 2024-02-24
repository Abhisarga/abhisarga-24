import Layout from "../../pages/_layout";
import { getLocation } from "../../utils/react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../loading";
import Head from "./head";
import MenuBar from "../landingheader";
import Header from "../header";

export default function Router() {
    const slots = import.meta.glob("/src/pages/**/(?!_)*.jsx", { eager: true })
    const pages = []
    for (const page in slots) {
        const slot = slots[page]
        const location = getLocation(page)
        console.log(location)
        if (!location) {
            continue
        }
        pages.push((
            <Route
                key={location}
                path={location}
                element={(
                    <Suspense fallback={<Loading />}>
                        {slot?.head && <Head head={slot?.head} key={location} />}
                        <Layout>
                            {
                                location !== "/"? <Header/> : <MenuBar/>
                            }
                            {slot?.layout ? (
                                <slot.default />
                            ) : (
                                <slot.default />
                            )}
                        </Layout>
                    </Suspense>
                )}
            />
        ))
    }
    return (
        <Routes>
            {pages}
        </Routes>
    )
}