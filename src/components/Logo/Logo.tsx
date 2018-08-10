import * as React from 'react';
import * as PropTypes from 'prop-types';
import './Logo.less';
import { cnCreate } from '../../utils/cn';
import greenHorizontalImg from 'icons/green-horizontal.svg';
import greenVerticalImg from 'icons/green-vertical.svg';
import Link from '../Link/Link';

interface Props {
    /** Color */
    color?: string;
    /** View */
    view?: 'horizontal' | 'vertical';
    /** Link */
    href?: string;
    /** target - property tag <a> */
    target?: '_self' | '_blank' | '_parent' | '_top';
}

const cn = cnCreate('logo');
class Logo extends React.Component<Props, {}> {
    static propTypes = {
        color: PropTypes.string,
        view: PropTypes.oneOf(['horizontal', 'vertical']),
        target: PropTypes.string,
        href: PropTypes.string,
    };

    static defaultProps = {
        color: 'green',
        view: 'horizontal',
        target: '_blank',
        href: '/',
    };

    render() {
        const { color, view, ...props } = this.props;
        const images = {
            'green-horizontal': greenHorizontalImg,
            'green-vertical': greenVerticalImg,
        };
        const BackgroundImage = images[`${color}-${view}`];

        return (
            <Link {...props} className={cn('', { view })}>
                <div className={cn('img')}>
                    <BackgroundImage />
                </div>
            </Link>
        );
    }
}

export default Logo;