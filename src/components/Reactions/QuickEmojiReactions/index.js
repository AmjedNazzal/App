import PropTypes from 'prop-types';
import React from 'react';
import {contextMenuRef} from '@pages/home/report/ContextMenu/ReportActionContextMenu';
import CONST from '@src/CONST';
import BaseQuickEmojiReactions, {baseQuickEmojiReactionsPropTypes} from './BaseQuickEmojiReactions';

const propTypes = {
    ...baseQuickEmojiReactionsPropTypes,

    /**
     * Function that can be called to close the
     * context menu in which this component is
     * rendered.
     */
    closeContextMenu: PropTypes.func.isRequired,
};

function QuickEmojiReactions(props) {
    const onPressOpenPicker = (openPicker) => {
        openPicker(contextMenuRef.current.contentRef, {
            horizontal: CONST.MODAL.ANCHOR_ORIGIN_HORIZONTAL.RIGHT,
            vertical: CONST.MODAL.ANCHOR_ORIGIN_VERTICAL.TOP,
        });
    };

    return (
        <BaseQuickEmojiReactions
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            onPressOpenPicker={onPressOpenPicker}
            onWillShowPicker={props.closeContextMenu}
        />
    );
}

QuickEmojiReactions.displayName = 'QuickEmojiReactions';
QuickEmojiReactions.propTypes = propTypes;
export default QuickEmojiReactions;
