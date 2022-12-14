import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #888;
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    border-radius: 5px;
    cursor: pointer;
    :active {
        box-shadow: inset 4px 4px 12px #c5c5c5,
                    inset -4px -4px 12px #ffffff;
       }
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;

