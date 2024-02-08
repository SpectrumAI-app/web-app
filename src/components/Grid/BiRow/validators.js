import { makeProps } from '../util/helper';

const ALIGNMENT = ['start', 'end', 'center'];

const alignValidator = (str) => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);
const alignProps = makeProps('align', () => ({
    type: String,
    default: null,
    validator: alignValidator,
}));

const justifyValidator = (str) => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);
const justifyProps = makeProps('justify', () => ({
    type: String,
    default: null,
    validator: justifyValidator,
}));

const alignContentValidator = (str) => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);
const alignContentProps = makeProps('alignContent', () => ({
    type: String,
    default: null,
    validator: alignContentValidator,
}));

const directionValidator = (str) => ['row', 'row-reverse', 'column', 'column-reverse'].includes(str);
const directionProps = makeProps('direction', () => ({
    type: String,
    default: null,
    validator: directionValidator,
}));

const propMap = {
    align: Object.keys(alignProps),
    justify: Object.keys(justifyProps),
    alignContent: Object.keys(alignContentProps),
    direction: Object.keys(directionProps),
};

const classMap = {
    align: 'align',
    justify: 'justify',
    alignContent: 'align-content',
    direction: 'direction',
};

export {
    alignValidator,
    alignProps,
    justifyValidator,
    justifyProps,
    alignContentValidator,
    alignContentProps,
    directionValidator,
    directionProps,
    propMap,
    classMap,
};
