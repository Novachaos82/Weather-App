import { formInteraction, funcFetcher, switching } from "./DOM";
/*initializing before load*/
const initialize = () => {
  funcFetcher();
  switching();
  formInteraction();
};

export { initialize };
