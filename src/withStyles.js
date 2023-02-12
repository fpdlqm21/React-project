/**aphrodite로 Theme파일을 등록하는 과정 */
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import {css, withStyles, withStylesPropTypes} from 'react-with-styles';
import Theme from './Theme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(Theme);

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet};