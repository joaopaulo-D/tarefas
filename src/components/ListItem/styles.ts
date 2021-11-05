import styled from "styled-components";

type PropsContainer = {
    done: boolean;
}

export const Container = styled.div(({ done } : PropsContainer) => (
    `
        display: flex;
        background-color: #20212c;
        padding: 10px;
        align-items: center;
        border-radius: 10px;
        margin-bottom: 10px;
        color: white;

        label {
            color: #ccc;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }
    `
));