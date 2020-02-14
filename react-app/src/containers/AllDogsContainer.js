import { connect } from 'react-redux';
import AllDogsComponent from '../components/AllDogsComponent';

const mapStateToProps = (state) => ({
  dogs: state.dogs,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllDogsComponent);
