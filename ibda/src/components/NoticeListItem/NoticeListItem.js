import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Td = styled.td`
    border-top: 1px solid #CCCCCC;
    padding: 1.6rem;
`;

function Notice({ notice, onClick }) {
    return (
        <tbody>
            <tr>
                <Td>{notice?.date?.slice(0,10)}</Td>
                {/* <Td ><Link to={`notice/${notice?._id}`}>{notice?.title}</Link></Td> */}
                <Td onClick={onClick}>{notice?.title}</Td>
                <Td>{notice?.writer?.name}</Td>
            </tr>
        </tbody>
    );
}

export default Notice;
