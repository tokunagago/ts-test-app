import { useEffect, useState } from 'react';
import data from './data.json';
import { ListItem } from './components/ListiItem';
import type { User } from './types/user';

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <>
      {users.map((user) => (
        <ListItem id={user.id} name={user.name} age={user.age} personalColor={user.personalColor} hobbies={user.hobbies} />
      ))}
    </>
  );
};