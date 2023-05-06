import { List, Match } from "../../../../components";
import { useEvents } from "../../../../store/event";

const Matches = ({}) => {
  const matches = useEvents((state) => state.matches);

  return (
    <List
      items={matches.slice(0, 5)}
      renderItem={(el, i) => (
        <Match
          index={i}
          item={el}></Match>
      )}></List>
  );
};

export default Matches;
