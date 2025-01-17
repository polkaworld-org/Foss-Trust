import { connect } from 'react-redux';
import { State } from '../../types/state';
import { Dispatch } from 'redux';
import { InjectedAccount } from '../../types/type';
import actions from '../../redux/actions';
import BeneficiaryHomePage from './beneficiaryHome';

const mapStateToProps = ({
  accounts,
  mainAccount,
  balances,
  beneficiaries
}: State) => ({
  accounts,
  mainAccount,
  balances,
  beneficiaries
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMainAccount: (mainAccount: InjectedAccount) => {
    dispatch({
      type: actions.SET_MAIN_ACCOUNT,
      payload: mainAccount
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeneficiaryHomePage);
