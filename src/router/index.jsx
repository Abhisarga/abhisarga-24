import Layout from "@client/layout";
import { getLocation } from "@utils/react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../loading";
import Head from "./head";

export default function Router() {
    const slots = import.meta.glob("@client/pages/**/*.jsx", { eager: true })
    const pages = []
    for (const page in slots) {
        const slot = slots[page]
        const location = getLocation(page)
        if (!location) {
            continue
        }
        // if (freePaths.includes(loc.pathname) || session.token) {
        pages.push((
            <Route
                key={location}
                path={location}
                element={(
                    <Suspense fallback={<Loading />}>
                        {slot?.head && <Head head={slot?.head} key={location} />}
                        {slot?.layout ? (
                            <Layout data={slot?.layout}>
                                <slot.default />
                            </Layout>
                        ) : (
                            <Layout>
                                <slot.default />
                            </Layout>
                        )}
                    </Suspense>
                )}
            />
        ))
        // }
    }
    return (
        <Routes>
            {pages}
        </Routes>
    )
}