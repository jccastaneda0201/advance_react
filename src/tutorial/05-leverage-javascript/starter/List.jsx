import { Person } from './Person';

import { people } from '../../../data';
const List = () => {
  return (
    <div>
      <h1>Leverage JavaScript</h1>
      {people.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
};
export default List;
