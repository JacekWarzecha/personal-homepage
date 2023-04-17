import {
  Wrapper,
  Repo,
  H3,
  Description,
  Links,
  LinksRow,
  LinksValue,
  Link,
  DT,
} from "./styled";

export const Project = ({ repositories }) => {
  return (
    <Wrapper>
      {repositories.map(
        ({ id, name, description, html_url, homepage }) =>
          !!description && (
            <Repo key={id}>
              <H3>{name}</H3>
              <Description>{description}</Description>

              <Links>
                {!!homepage && (
                  <LinksRow>
                    <DT>Demo:</DT>
                    <LinksValue>
                      <Link href={homepage} target="_blank" rel="noreferrer">
                        {homepage}
                      </Link>
                    </LinksValue>
                  </LinksRow>
                )}
                <LinksRow>
                  <DT>Code:</DT>
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
