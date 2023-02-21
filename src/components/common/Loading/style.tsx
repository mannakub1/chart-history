import styled from "styled-components";
import SyncIcon from "@mui/icons-material/Sync";
import { css } from "@emotion/css";
import { GRAY_838383 } from "../../../constants/colors";

export const LoadingLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  height: 4.375rem;
`;

export const LoadingIcon = styled(SyncIcon)<{ loading: string }>`
@keyframes cog {
    100%{ 
	-moz-transform: rotate(360deg);
	-ms-transform: rotate(360deg);
	transform: rotate(360deg)
}
}

  position: absolute;
  opacity: ${({ loading }) => (loading === "true" ? 1 : 0)};
  background-color: transparent;
  color: ${GRAY_838383};
  font-size: 2.5rem;
  top: calc(50% - 1.25rem);
  left: calc(50% - 1.25rem);
  -webkit-animation: cog 1s infinite;			
	-moz-animation: cog 1s infinite;
	-ms-animation: cog 1s infinite; 			
	animation: cog 1s infinite;
	-webkit-animation-timing-function: linear;
	-moz-animation-timing-function: linear;		
	-ms-animation-timing-function: linear;
	animation-timing-function: linear	
}
`;

export const visible = css`
  transition: opacity 0.3s ease-in-out, top 0.2s ease-in-out;
`;
export const SpinnerHidden = css`
  transition: opacity 0.25s linear;
`;
