import React from "react";
import {Formik} from "formik";
import {
  ErrorText,
  FormBackground,
  FormContainer, FormGroup,
  MovieForm,
  MovieFormInput, MovieFormTextarea,
  MovieFormTitle,
  SeparationLine, SubmitButton
} from "./CreateMovie.style";
import {CREATE_MOVIE} from "../../graphql/mutations/createMovie.gql";
import {useMutation} from "@apollo/client";

export const CreateMovie: React.FC = () => {
  const [createMovie, { error}] = useMutation(CREATE_MOVIE)
  return (
    <FormBackground>
        <Formik
          initialValues={{ title: '', releaseYear: '', description: '', length: '', imgUrl: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            const { description, imgUrl, length, releaseYear, title } = values
            const movie = {
              description,
              imgUrl,
              length: length.toString(),
              releaseYear: releaseYear.toString(),
              title
            }
            createMovie({ variables: { movie }})
          }}
        >
          {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
            <FormContainer>
              <MovieFormTitle>Créer un film</MovieFormTitle>
              <SeparationLine />
              <MovieForm onSubmit={handleSubmit}>
                <FormGroup>
                  <label>Titre</label>
                  <MovieFormInput
                    type="text"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Année de sortie</label>
                  <MovieFormInput
                    type="number"
                    name="releaseYear"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.releaseYear}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Durée</label>
                  <MovieFormInput
                    type="number"
                    name="length"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.length}
                  />
                </FormGroup>

                <FormGroup>
                  <label>URL de l'image</label>
                  <MovieFormInput
                    type="text"
                    name="imgUrl"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.imgUrl}
                  />
                </FormGroup>
                <MovieFormTextarea
                  name="description"
                  cols={30}
                  rows={10}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                <SubmitButton type="submit" disabled={isSubmitting}>
                  Envoyer
                </SubmitButton>
                { error && (
                  <ErrorText>{ error.message }</ErrorText>
                )}
              </MovieForm>
            </FormContainer>
          )}
        </Formik>
    </FormBackground>
  )
}

export default CreateMovie
