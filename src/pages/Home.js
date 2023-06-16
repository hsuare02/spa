import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')} 
    </div>
  `;
  return view;
};


//.join si no se agrega el join se arma un html con comillas, para evitar esto ese necesario .join('')
export default Home;