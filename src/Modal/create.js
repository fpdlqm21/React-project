/**Modal창을 열고 닫는 공급자 반환 하이어오더 함수 */
import React, { PureComponent } from "react";
import Modal from '../Modal';
import {Provider} from './context';

export default function createModalProvider(ContentMap={}){
    return class ModalProvider extends PureComponent{
        constructor(props){
            super(props);
            this.state = {showModal: false};
            this.handleClose = this.handleClose.bind(this);
            this.handleOpen = this.handleOpen.bind(this);
        }

        //Modal open 함수
        handleOpen(contentId){
            this.contentId = contentId;
            this.setState({showModal: true});
        }

        //Modal close 함수
        handleClose(){
            this.setState({showModal: false});
        }

        render(){
            const {children} = this.props;
            const {showModal} = this.state;
            const ModalContent = ContentMap[this.contentId];
            //배열 형태로 받은 컴포넌트들 중 key(contentId)로 추출 

            return(
                <Provider
                    value={{
                        openModal: this.handleOpen,
                        closeModal: this.handleClose,
                    }}    
                >
                    {/* showModal, ModalContent가 true이면 Modal 열림 */}
                    {children}
                    {showModal && ModalContent && (
                        <Modal>
                            <ModalContent/>
                        </Modal>
                    )}
                </Provider>
            );
        }
    }
}