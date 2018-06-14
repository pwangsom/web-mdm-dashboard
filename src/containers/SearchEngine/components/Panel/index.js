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
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PanelResult from './PanelResults'
import PanelFields from './PanelFields'

/**
 * Component with the panel with the search results
 * @class Panel
 * @extends PureComponent
 */
class Panel extends PureComponent {
    /**
     * Create array of fields
     * @function createFields
     * @return {array}
     */
    createFields = () => {
        const fields = []
        this.props.itemResults.length && fields.push.apply(
            fields, this.props.itemResults[0].map(field => {
                return [
                    field['fieldId'],
                    field['fieldName']
                ]
            })
        )
        return fields
    }

    /** 
     * Render component 
     * @function render
     */ 
    render() {
        return (
            <React.Fragment>
                <div className="searchList">
                    <PanelFields fields={this.createFields()} />
                    <PanelResult itemResults={this.props.itemResults} />
                </div>
            </React.Fragment>
        )
    }
}

Panel.propTypes = {
    itemType: PropTypes.string.isRequired,
    itemResults: PropTypes.array.isRequired
}

export default Panel