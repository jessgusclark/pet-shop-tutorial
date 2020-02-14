import { connect } from 'react-redux';
import DogComponent from '../components/DogComponent';

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.data,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DogComponent);
