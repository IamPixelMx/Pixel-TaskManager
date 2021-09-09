import { Location, State } from 'history';

type Props = {
  location: Location<State>;
};

const locationToRoute = ({ location }: Props) => {
  return {
    path: location.pathname,
  };
}

export default locationToRoute;