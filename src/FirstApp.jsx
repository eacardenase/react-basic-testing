import PropTypes from 'prop-types';

FirstApp.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    subtitle: 'help',
    // title: 'John Doe',
};

export function FirstApp({ title, subtitle }) {
    return (
        <>
            <h1>Hola, soy {title}</h1>
            <p>Send {subtitle}</p>
        </>
    );
}
