import PropTypes from 'prop-types';

export default PropTypes.shape({
	href: PropTypes.string.isRequired,
	label: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	target: PropTypes.string
});
