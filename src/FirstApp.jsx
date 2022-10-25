import PropTypes from 'prop-types';

FirstApp.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    subtitle: "I'm a software developer",
    // title: 'John Doe',
};

export function FirstApp({ title, subtitle, name }) {
    return (
        <>
            <h1> {title} </h1>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
}
