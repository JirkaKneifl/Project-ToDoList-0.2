import './Text.css';

type TextProps = {
    type: 'title' | 'body' | 'small-body' | 'meta';
    children: any;
};

const typeToElement = {
    title: 'h1',
    body: 'h4',
    'small-body': 'p',
    meta: 'em',
} as const;

const typeClassName: Record<TextProps['type'], string> = {
    title: 'text text-title',
    body: 'text text-body',
    'small-body': 'text text-small-body',
    meta: 'text text-meta',
};

function Text(props: TextProps) {
    const Component = typeToElement[props.type];
    const styleClassName = typeClassName[props.type];

    return <Component className={styleClassName}>{props.children}</Component>;
}
export default Text;
