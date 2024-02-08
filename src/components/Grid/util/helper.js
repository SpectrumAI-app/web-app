const upperFirst = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const makeProps = (prefix, def) => breakpoints.reduce((props, val) => ({
    ...props,
    [`${prefix}${upperFirst(val)}`]: def(),
}), {});

export {
    makeProps,
    upperFirst,
};
