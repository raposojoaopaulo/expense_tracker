import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const ButtonSubmit = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #888;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  color: #888;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
   }
   :after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: lightblue;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
   }
   :hover {
    color: #ffffff;
    border: 1px solid lightblue;
   }
   :hover:before {
    top: -35%;
    background-color: lightblue;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
   }
   :hover:after {
    top: -45%;
    background-color: lightblue;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
   }
`;

export const InputArea = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: #f4f2f2;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 10em;
  transition: all ease-in-out .5s;
  margin-right: 0.5em;
`;

export const SelectArea = styled.select`
  font-family: inherit;
  font-size: inherit;
  background-color: #f4f2f2;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 12em;
  transition: all ease-in-out .5s;
  margin-right: 0.5em;
`;