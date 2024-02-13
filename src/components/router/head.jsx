import { Helmet } from "react-helmet";

/**
 * 
 * @param {import("@types_/head").HeadProps} param0 
 * @returns 
 */
export default function Head({ head }) {
    return (
        <Helmet>
            {head.title && <title>{head.title}</title>}
            {head.meta && head.meta.length && head.meta.map(m => (
                <meta key={m.key} {...m} />
            ))}
            {head.links && head.links.length && head.links.map(l => (
                <link key={l.key} {...l} />
            ))}
            {head.styles && head.styles.length && head.styles.map(s => (
                <style key={s.key} {...s.props} dangerouslySetInnerHTML={{ __html: s.style}} />
            ))}
        </Helmet>
    )
}