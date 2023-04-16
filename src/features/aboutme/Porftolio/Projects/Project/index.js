export const Project = ({ repositories }) => {
  return (
    <div>
      {repositories.map(({ name, id, html_url, homepage }) => (
        <div key={id}>
          <h3>Nazwa:{name}</h3>
          <p>Link repo:{html_url}</p>
          <p>Link Demo:{homepage}</p>
        </div>
      ))}
    </div>
  );
};
