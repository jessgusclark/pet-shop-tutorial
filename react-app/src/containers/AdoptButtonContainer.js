import { connect } from 'react-redux';
import { adoptDog } from '../operations';
import AdoptButtonComponent from '../components/AdoptButtonComponent';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  handleAdoptClick: id => adoptDog(id, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdoptButtonComponent);
