import { connect } from 'react-redux';
import DogComponent from '../components/DogComponent';
import { isPetOwned } from '../helpers';

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.data,
  isOwned: isPetOwned(ownProps.isOwned),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DogComponent);
