import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ name, onAdd, showAddButton }) => {
	return (
		<header className='header'>
			<h1>Welcome {name}</h1>
			<Button
				color={showAddButton ? 'red' : 'green'}
				text={showAddButton ? 'Close' : 'Add'}
				onClick={onAdd}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: 'Welcome user',
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
