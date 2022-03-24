import styled from "styled-components";

export const Modal = styled.main`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  display: grid;
  place-items: center;
  .container {
    width: 30rem;
    background: ${(props) => props.theme.body};
    z-index: 1;
    padding: 2rem;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
`;
export const ModalHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  color: gray;
`;
export const ModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
