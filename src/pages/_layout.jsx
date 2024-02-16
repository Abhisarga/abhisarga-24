import { useLocation, useNavigate } from "react-router-dom";
import { Providers } from "./_providers";

export default function Layout({ children, data }) {
    const navigate = useNavigate()
    // const session = useSelector(selectSession)
    // console.log("session", session)
    const loc = useLocation()
    const freePaths = [
        "/",
        "/login",
        "/register"
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
        <Providers>
            <main>
                {children}
            </main>
        </Providers>
    );
}