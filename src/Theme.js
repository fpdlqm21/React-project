/**테마 스타일 설정 */
export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
};

//해상도에 따른 출력 크기 설정
const breakpoints = {
    [BREAKPOINT_NAMES.LARGE]: 1128,
    [BREAKPOINT_NAMES.MEDIUM]: 744,
    [BREAKPOINT_NAMES.SMALL]: 327,
};

//브라우저의 크기에 따라 반응하는 속성
const responsive = {
    [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
    [BREAKPOINT_NAMES]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM] -1}px)`,
    print: `@media print`,
};

//길이단위 설정
export const unit = 4; 

export default{
    //색상
    color: {
        primary: '#2196F3', 
        primaryDark: '#1976D2',
        secondary: '#795548',
        secondaryDark: '#00796b',
        white: '#FFFFFF',
        gray: '#9e9e9e',
        grayLight: '#eeeeee',
        grayDark: '#616161',
        black: '#000000',
        border: 'rgba(0, 0, 0, .15)',
        error: 'red',
        default: '#333333', 
    },
    //폰트 사이즈
    size:{
        h1: 48,
        h2: 36,
        h3: 28,
        xg: 24,
        lg: 18,
        md: 14,
        sm: 12,
        xs: 10,
    },
    //라인 간격
    lineHeight:{
        xg: 1.6,
        lg: 1.6,
        md: 1.5,
        sm: 1.4,
        xs: 1.4,
    },
    //폰트 굵기
    fontWeight:{
        bold: 'bold',
        normal: 'normal',
        light: 300,
    },
    //텍스트 위치
    textAlign:{
        center: 'center',
    },
    //그림자 설정
    depth:{
        level1: {
            boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14)',
        },
        level2: {
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
        },
        level3: {
            boxShadow: '0 8px 17px 12px rgba(0, 0, 0, 0.14)',
        },
    },
    unit,
    responsive,
};
