import React from 'react';

class Projects extends React.Component {
    state = {
      loading: true,
      github: {},
      repos: []
    }
  
    fetchGithub = () => {
      fetch(`https://api.github.com/users/JenJordan4`)
        .then(res => res.json())
        .then(data => this.setState({ github: data }))
    }
  
    fetchRepos = () => {
      fetch(`https://api.github.com/users/JenJordan4/repos`)
        .then(res => res.json())
        .then(data => this.setState({ repos: data, loading: false }))
    }
  
    render() {
      const { github, repos, loading } = this.state
      return (
          <main className="projects-main">
            <div className="head-container bkg-div">
              <i className="fab fa-github"></i>
              <a
                id="github-link"
                href={github.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1>{loading ? "Loading" : github.login}</h1>
              </a>
              <p>{loading ? "Fetching repos . . ." : github.bio}</p>
            </div>
            <div className="github-cards-div">
                <div id="repos">
                  {repos.map(repo => (
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={repo.id}
                    >
                      <div className="github-card">
                        <h3>{repo.name}</h3>
                        <p>Language: {repo.language}</p>
                        <p>{repo.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
          </main>
      )
    }
  
    componentDidMount() {
      this.fetchGithub()
      this.fetchRepos()
    }
  }
  
  export default Projects