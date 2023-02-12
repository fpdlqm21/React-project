/**debounce 함수 (알림 메시지가 천천히 사라지도록)*/
export function debounce(func, delay){
    let inDebounce;
    return function(...args){
        //inDebounce값이 존재 시
        if(inDebounce){
            clearTimeout(inDebounce);
        }
        //debounce의 인자로 들어온 func함수를 delay시간만큼 지연시킴
        inDebounce = setTimeout(
            //func로 들어올 인자를 담고있는 배열을 얻기 위해 ...args사용
            ()=>func(...args),
            delay);
    }
}