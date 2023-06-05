import {
  Wrapper,
  Repo,
  NameRepo,
  Description,
  Links,
  LinksRow,
  LinksValue,
  Link,
  LinksName,
} from "./styled";

export const Project = ({ repositories }) => {
  return (
    <Wrapper>
      {repositories.map(
        ({ id, name, description, html_url, homepage }) =>
          !!description && (
            <Repo key={id}>
              <NameRepo>{name}</NameRepo>
              <Description>{description}</Description>

              <Links>
                {!!homepage && (
                  <LinksRow>
                    <LinksName>Demo:</LinksName>
                    <LinksValue>
                      <Link href={homepage} target="_blank" rel="noreferrer">
                        {homepage}
                      </Link>
                    </LinksValue>
                  </LinksRow>
                )}
                <LinksRow>
                  <LinksName>Code:</LinksName>
                  <LinksValue>
                    <Link href={html_url} target="_blank" rel="noreferrer">
                      {html_url}
                    </Link>
                  </LinksValue>
                </LinksRow>
              </Links>
            </Repo>
          )
      )}
    </Wrapper>
  );
};
