const api_key = 'cd106e2ba5294993a813e50291799e15'
const baseURL = 'https://api.rawg.io/api'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${baseURL}${endpoint}`);
  const json = await req.json();
  return json;
}
export default {
      getPopularList: async () =>{
        return [
          {
            slug: 'populars',
            title: 'Populares',
            items: await basicFetch(`/games/lists/popular?key=${api_key}`)
          }
        ]
      }
}

//https://api.rawg.io/api/games/lists/popular?key=cd106e2ba5294993a813e50291799e15