import React from "react";
import styled from "styled-components";

function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {closable && <CloseButton className="modal-close" onClick={close} />}
          <Part>
            <Mention>탈퇴하시겠습니까?</Mention>
            <Compo>
              <Confirm>확인</Confirm>
              <Cancle className="modal-close" onClick={close}>
                취소
              </Cancle>
            </Compo>
          </Part>
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

Modal.defaultProps = {
  closable: true,
  maskClosable: true,
  visible: false,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #f3f1f0;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const Mention = styled.div`
  font-family: monospace;
  color: #565656;
  font-weight: 500;
  font-size: 20px;
`;

const Confirm = styled.div`
  font-family: monospace;
  color: #f06363;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
`;

const Cancle = styled.div`
  font-family: monospace;
  color: #565656;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 15%;
`;

const Compo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
`;

const Part = styled.div``;

export default Modal;
