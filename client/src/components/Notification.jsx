import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const Notification = ({ notification }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);

        return setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    }, [alert]);

    return (
        <Fragment>
            {isVisible && (
                <div className={notification.level}>{{ notification }}</div>
            )}
        </Fragment>
    );
};

Notification.propTypes = {
    notification: PropTypes.string.isRequired,
};

export default Notification;
