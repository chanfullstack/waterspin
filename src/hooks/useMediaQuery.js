import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        if (window) {
            const media = window.matchMedia(query)
            if (media.matches !== matches) {
                setMatches(media.matches)
            }
            const listener = () => setMatches(media.matches)
            window.addEventListener("resize", listener)
            return () => window.removeEventListener("resize", listener)
        }
    }, [matches, query])
    return matches
}

export const breakPoints = {
    sm: "(min-width :376px)",
    mobl: "(min-width :425px)",
    tab: "(min-width :768px)",
    md: "(min-width :900px)",
    lg: "(min-width :1024px)",
    xl: "(min-width :1280px)",
    "2xl": "(min-width :1440px)",
    "3xl": "(min-width :1920px)",
}

export default useMediaQuery