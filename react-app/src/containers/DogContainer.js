import { connect } from 'react-redux';
import DogComponent from '../components/DogComponent';
import { isPetOwned, isOwner } from '../helpers';

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.data,
  isOwned: isPetOwned(ownProps.isOwned),
  isOwner: isOwner(state.user, state.adoptionStatus[ownProps.data.id].toLowerCase())
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DogComponent);
