import { makeProps } from '../util/helper';

const ALIGNMENT = ['start', 'end', 'center'];

const alignSelfValidator = (str) => [...ALIGNMENT, 'auto', 'baseline', 'stretch'].includes(str);
const alignSelfProps = makeProps('alignSelf', () => ({
    type: String,
    default: null,
    validator: alignSelfValidator,
}));

const breakpointProps = makeProps('cols', () => ({
    type: [String, Number],
    default: null,
}));

const offsetProps = makeProps('offset', () => ({
    type: [String, Number],
    default: null,
}));

const orderProps = makeProps('order', () => ({
    type: [String, Number],
    default: null,
}));

const propMap = {
    alignSelf: Object.keys(alignSelfValidator),
    cols: Object.keys(breakpointProps),
    offset: Object.keys(offsetProps),
    order: Object.keys(orderProps),
};

const classMap = {
    alignSelf: 'align',
    cols: 'cols',
    offset: 'offset',
    order: 'order',
};

export {
    alignSelfValidator,
    alignSelfProps,
    breakpointProps,
    offsetProps,
    orderProps,
    propMap,
    classMap,
};
