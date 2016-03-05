import { connect } from 'react-redux'
import FontList from '../components/FontList'

const getVisibleFonts = (fonts) => {
  return fonts;
}

const mapStateToProps = (state) => {
  return {
    fonts: state.fonts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const FilteredFontList = connect(
  mapStateToProps
)(FontList)

export default FilteredFontList