import { GetBondResponse } from "../../services/home/home-types";
export type BondDetailType = {
  detail: GetBondResponse | undefined;
  bondType: string;
};

export type DetailType = {
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  info5: string;
  info6?: string;
};
