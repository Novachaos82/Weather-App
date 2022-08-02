import { formInteraction, funcFetcher, switching } from "./DOM";
const initialize = () => {
  funcFetcher();
  switching();
  formInteraction();
};

export { initialize };
