export interface IHeadMeta {
    readonly content?: string;
    readonly httpEquiv?: string;
    readonly name?: string;
    readonly property?: string;
    readonly key?: string;
    readonly itemProp?: string;
}

export declare interface IHeadLink {
    as?: string;
    crossOrigin?: string;
    disabled?: boolean;
    href?: string;
    hreflang?: string;
    id?: string;
    imageSizes?: string;
    imageSrcset?: string;
    integrity?: string;
    media?: string;
    prefetch?: string;
    referrerPolicy?: string;
    rel?: string;
    sizes?: string;
    title?: string;
    type?: string;
    key?: string;
}

export declare interface IHeadStyle {
    readonly style: string;
    readonly props?: Readonly<{
        [propName: string]: string;
    }>;
    readonly key?: string;
}

export default interface IHead {
    readonly title?: string
    readonly meta?: readonly IHeadMeta[]
    readonly links?: readonly IHeadLink[]
    readonly styles?: readonly IHeadStyle[]
    readonly frontmatter?: Readonly<Record<string, unknown>>
}

export interface HeadProps {
    head: IHead
}


export interface LayoutType {
    hasHeader?: boolean
    hasFooter?: boolean
}