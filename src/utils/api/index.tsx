import { createMethod } from "./tools";
import { gtApiWrapper, gtClient } from "./gt-client";

export const api = {
  gt: createMethod(gtClient, gtApiWrapper),
};
