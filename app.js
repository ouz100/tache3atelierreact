    class ListeDeTaches extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          taches: [],
          chargement: true,
        };
      }

      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(reponse => reponse.json())
          .then(donnees => {
            this.setState({ taches: donnees, chargement: false });
          })
          .catch(erreur => console.error('Erreur lors de la récupération des tâches:', erreur));
      }

      render() {
        const { taches, chargement } = this.state;

        return (
          <div>
            <h1>Liste des Tâches</h1>
            {chargement ? (
              <p>Chargement...</p>
            ) : (
              <ul>
                {taches.map(tache => (
                  <li key={tache.id}>
                    {tache.title} - {tache.completed ? 'Terminée' : 'En cours'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }
    }

    ReactDOM.render(<ListeDeTaches />, document.getElementById('racine'));