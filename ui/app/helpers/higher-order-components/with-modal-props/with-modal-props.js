import { connect } from 'react-redux'
import { hideModal } from '~/brave/ui/app/store/actions'

const mapStateToProps = state => {
  const { appState } = state
  const { props: modalProps } = appState.modal.modalState

  return {
    ...modalProps,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(hideModal()),
  }
}

export default function withModalProps (Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component)
}
