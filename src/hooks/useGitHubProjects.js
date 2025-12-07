import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'BryanRF';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export const useGitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(GITHUB_API_URL, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          throw new Error('Error al cargar proyectos de GitHub');
        }

        const data = await response.json();
        
        // Filtrar y mapear proyectos públicos
        const mappedProjects = data
          .filter(repo => !repo.fork && !repo.private) // Solo repos públicos no forkeados
          .sort((a, b) => new Date(b.updated_at) - new Date(b.updated_at)) // Más recientes primero
          .map((repo, index) => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || 'Proyecto de desarrollo',
            technologies: repo.topics || [],
            github: repo.html_url,
            status: repo.archived ? 'Archivado' : 'Activo',
            type: determineProjectType(repo),
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            updated: repo.updated_at,
          }));

        setProjects(mappedProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub projects:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  return { projects, loading, error };
};

// Determinar el tipo de proyecto basado en el lenguaje y topics
const determineProjectType = (repo) => {
  const topics = repo.topics || [];
  const language = repo.language?.toLowerCase() || '';

  if (topics.includes('machine-learning') || topics.includes('ai') || topics.includes('ml')) {
    return 'ml';
  }
  if (topics.includes('database') || language.includes('sql')) {
    return 'database';
  }
  if (topics.includes('web') || language.includes('javascript') || language.includes('typescript')) {
    return 'web';
  }
  if (topics.includes('automation') || topics.includes('bot')) {
    return 'automation';
  }
  if (topics.includes('analytics') || topics.includes('data')) {
    return 'analytics';
  }
  
  return 'default';
};
