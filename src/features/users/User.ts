interface User {
  [id: string]: {
    name: string;
    email: string;
		id: string;
  };
}

const users: User = {};

export default users;
