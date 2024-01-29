import {Providers} from "./_providers.tsx";
import { selectSession } from "@client/components/auth/authSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./components/header";

export default function Layout({children, data}) {
  const navigate = useNavigate()
    // const session = useSelector(selectSession)
    // console.log("session", session)
    const loc = useLocation()
    const freePaths = [
        "/",
        "/signin",
        "/signup"
    ]
    // useEffect(() => {
    //     if (!freePaths.includes(loc.pathname) && session === null) {
    //         navigate("/signin")
    //     }
    //     if (freePaths.includes(loc.pathname) && session !== null) {
    //         navigate("/home")
    //     }
    // }, [session, loc.pathname])
    if (!data) {
        data = {
            hasFooter: true,
            hasHeader: true
        }
    }
    else {
        if (data.hasFooter === null || data.hasFooter === undefined) {
            data.hasFooter = true
        }
        if (data.hasHeader === null || data.hasHeader === undefined) {
            data.hasHeader = true
        }
    }
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
            {/* {data.hasHeader && <Header />} */}
            <main>
                {children}
            </main>
            {/* {data.hasFooter && <Footer />} */}
        </Providers>
      </body>
    </html>
  );
}