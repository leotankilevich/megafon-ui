import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface ILinkProps {
    /** Link */
    href?: string;
    children?: JSX.Element[] | Element[] | JSX.Element | string | Element;
    /** target - property tag <a> */
    target?: '_self' | '_blank' | '_parent' | '_top';
    /** Custom class name */
    className?: string;
    /** rel - property tag <a> */
    rel?: string;
    /** Click event handler */
    onClick?: (e: React.MouseEvent<EventTarget>) => void;
}

class Link extends React.Component<ILinkProps, {}> {
    static propTypes = {
        href: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
            PropTypes.string,
            PropTypes.node,
        ]),
        target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
        className: PropTypes.string,
        rel: PropTypes.string,
        onClick: PropTypes.func,
    };

    render() {

        return (
            <a {...this.props} />
        );
    }
}

export default Link;
