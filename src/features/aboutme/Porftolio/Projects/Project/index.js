import { Wrapper, Repo, H3, Description, Link } from "./styled";

export const Project = ({ repositories }) => {
  return (
    <Wrapper>
      {repositories.map(({ id, name, description, html_url, homepage }) => (
        <Repo key={id}>
          <H3>{name}</H3>
          <Description>{description}</Description>
          <Link href={homepage}>Demo:&nbsp;{homepage}</Link>
          <Link href={html_url}>Code:&nbsp;{html_url}</Link>
        </Repo>
      ))}
    </Wrapper>
  );
};
