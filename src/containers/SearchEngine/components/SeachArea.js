/*
 *   Copyright © 2018 Teclib. All rights reserved.
 *
 *   This file is part of web-mdm-dashboard
 *
 * web-mdm-dashboard is a subproject of Flyve MDM. Flyve MDM is a mobile
 * device management software.
 *
 * Flyve MDM is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 3
 * of the License, or (at your option) any later version.
 *
 * Flyve MDM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * ------------------------------------------------------------------------------
 * @author     Gianfranco Manganiello (gmanganiello@teclib.com)
 * @author     Hector Rondon (hrondon@teclib.com)
 * @copyright  Copyright © 2018 Teclib. All rights reserved.
 * @license    GPLv3 https://www.gnu.org/licenses/gpl-3.0.html
 * @link       https://github.com/flyve-mdm/web-mdm-dashboard
 * @link       http://flyve.org/web-mdm-dashboard
 * @link       https://flyve-mdm.com
 * ------------------------------------------------------------------------------
 */

/** import dependencies */
import React, {
  PureComponent,
} from 'react'
import PropTypes from 'prop-types'
import I18n from 'shared/i18n'

/**
 * Component with the render of the search button
 * @class SearchQueryBuilder
 * @extends SeachArea
 */
class SeachArea extends PureComponent {
  /**
   * Render component
   * @function render
   */
  render() {
    let display = null

    if (this.props.isLoading) {
      display = (
        <p>
          {I18n.t('commons.loading')}
          ...
        </p>
      )
    } else if (this.props.query && this.props.query.criteria.length > 0) {
      display = (
        <button
          className="btn btn--primary"
          onClick={this.props.handleSearchItem}
          type="submit"
        >
          {I18n.t('commons.search')}
        </button>
      )
    }

    return (
      <div className="search-engine__seach-area">
        { display }
      </div>
    )
  }
}

SeachArea.defaultProps = {
  query: null,
}

SeachArea.propTypes = {
  query: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  handleSearchItem: PropTypes.func.isRequired,
}

export default SeachArea
