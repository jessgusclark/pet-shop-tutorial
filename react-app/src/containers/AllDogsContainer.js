import { connect } from 'react-redux';
import AllDogsComponent from '../components/AllDogsComponent';

const mapStateToProps = (state) => ({
  dogs: state.dogs,
  adoptionStatus: state.adoptionStatus,
  loading: state.dogsLoading || state.adoptionLoading,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllDogsComponent);
