const LOGINPATH = 'localhost:4001/auth';

const credentials = ({ username = '', password = '' } = {}) => ({
  data: {
    username,
    password,
    path: LOGINPATH,
  },
  getToken: async () => {
    try {
      const { username, password, path } = this.data;
      const res = await fetch(path, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
})