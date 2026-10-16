import styled from "@emotion/styled";

export const Container = styled.section`
  max-width: 660px;
  margin: 0 auto;
  padding: 48px 16px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 21px;
`;

export const ResetButton = styled.button`
  padding: 8px 14px;
  border: 1px solid #e5484d;
  border-radius: 6px;
  background-color: white;
  color: #e5484d;

  &:hover {
    background-color: #fff1f1;
  }
`;

export const Empty = styled.p`
  margin-top: 70px;
  text-align: center;
  color: #777;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  text-align: left;

  th,
  td {
    padding: 13px 15px;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
  }

  th {
    background-color: #8bf9db;
  }
`;
