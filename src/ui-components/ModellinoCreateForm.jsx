/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createModellino } from "../graphql/mutations";
const client = generateClient();
export default function ModellinoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Descrizione: "",
    ClasseAppartenenza: "",
    Categoria: "",
    TipodiPartecipazione: "",
    PremioSpeciale: "",
  };
  const [Descrizione, setDescrizione] = React.useState(
    initialValues.Descrizione
  );
  const [ClasseAppartenenza, setClasseAppartenenza] = React.useState(
    initialValues.ClasseAppartenenza
  );
  const [Categoria, setCategoria] = React.useState(initialValues.Categoria);
  const [TipodiPartecipazione, setTipodiPartecipazione] = React.useState(
    initialValues.TipodiPartecipazione
  );
  const [PremioSpeciale, setPremioSpeciale] = React.useState(
    initialValues.PremioSpeciale
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDescrizione(initialValues.Descrizione);
    setClasseAppartenenza(initialValues.ClasseAppartenenza);
    setCategoria(initialValues.Categoria);
    setTipodiPartecipazione(initialValues.TipodiPartecipazione);
    setPremioSpeciale(initialValues.PremioSpeciale);
    setErrors({});
  };
  const validations = {
    Descrizione: [{ type: "Required" }],
    ClasseAppartenenza: [{ type: "Required" }],
    Categoria: [{ type: "Required" }],
    TipodiPartecipazione: [{ type: "Required" }],
    PremioSpeciale: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Descrizione,
          ClasseAppartenenza,
          Categoria,
          TipodiPartecipazione,
          PremioSpeciale,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createModellino.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ModellinoCreateForm")}
      {...rest}
    >
      <TextField
        label="Descrizione"
        isRequired={true}
        isReadOnly={false}
        value={Descrizione}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descrizione: value,
              ClasseAppartenenza,
              Categoria,
              TipodiPartecipazione,
              PremioSpeciale,
            };
            const result = onChange(modelFields);
            value = result?.Descrizione ?? value;
          }
          if (errors.Descrizione?.hasError) {
            runValidationTasks("Descrizione", value);
          }
          setDescrizione(value);
        }}
        onBlur={() => runValidationTasks("Descrizione", Descrizione)}
        errorMessage={errors.Descrizione?.errorMessage}
        hasError={errors.Descrizione?.hasError}
        {...getOverrideProps(overrides, "Descrizione")}
      ></TextField>
      <SelectField
        label="Classe appartenenza"
        placeholder="Please select an option"
        isDisabled={false}
        value={ClasseAppartenenza}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descrizione,
              ClasseAppartenenza: value,
              Categoria,
              TipodiPartecipazione,
              PremioSpeciale,
            };
            const result = onChange(modelFields);
            value = result?.ClasseAppartenenza ?? value;
          }
          if (errors.ClasseAppartenenza?.hasError) {
            runValidationTasks("ClasseAppartenenza", value);
          }
          setClasseAppartenenza(value);
        }}
        onBlur={() =>
          runValidationTasks("ClasseAppartenenza", ClasseAppartenenza)
        }
        errorMessage={errors.ClasseAppartenenza?.errorMessage}
        hasError={errors.ClasseAppartenenza?.hasError}
        {...getOverrideProps(overrides, "ClasseAppartenenza")}
      >
        <option
          children="Junior"
          value="JUNIOR"
          {...getOverrideProps(overrides, "ClasseAppartenenzaoption0")}
        ></option>
        <option
          children="Beginner"
          value="BEGINNER"
          {...getOverrideProps(overrides, "ClasseAppartenenzaoption1")}
        ></option>
        <option
          children="Standard"
          value="STANDARD"
          {...getOverrideProps(overrides, "ClasseAppartenenzaoption2")}
        ></option>
        <option
          children="Master"
          value="MASTER"
          {...getOverrideProps(overrides, "ClasseAppartenenzaoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Categoria"
        placeholder="Please select an option"
        isDisabled={false}
        value={Categoria}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descrizione,
              ClasseAppartenenza,
              Categoria: value,
              TipodiPartecipazione,
              PremioSpeciale,
            };
            const result = onChange(modelFields);
            value = result?.Categoria ?? value;
          }
          if (errors.Categoria?.hasError) {
            runValidationTasks("Categoria", value);
          }
          setCategoria(value);
        }}
        onBlur={() => runValidationTasks("Categoria", Categoria)}
        errorMessage={errors.Categoria?.errorMessage}
        hasError={errors.Categoria?.hasError}
        {...getOverrideProps(overrides, "Categoria")}
      >
        <option
          children="A1"
          value="A1"
          {...getOverrideProps(overrides, "Categoriaoption0")}
        ></option>
        <option
          children="A2"
          value="A2"
          {...getOverrideProps(overrides, "Categoriaoption1")}
        ></option>
        <option
          children="B1"
          value="B1"
          {...getOverrideProps(overrides, "Categoriaoption2")}
        ></option>
        <option
          children="B2"
          value="B2"
          {...getOverrideProps(overrides, "Categoriaoption3")}
        ></option>
        <option
          children="C1"
          value="C1"
          {...getOverrideProps(overrides, "Categoriaoption4")}
        ></option>
        <option
          children="C2"
          value="C2"
          {...getOverrideProps(overrides, "Categoriaoption5")}
        ></option>
      </SelectField>
      <SelectField
        label="Tipodi partecipazione"
        placeholder="Please select an option"
        isDisabled={false}
        value={TipodiPartecipazione}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descrizione,
              ClasseAppartenenza,
              Categoria,
              TipodiPartecipazione: value,
              PremioSpeciale,
            };
            const result = onChange(modelFields);
            value = result?.TipodiPartecipazione ?? value;
          }
          if (errors.TipodiPartecipazione?.hasError) {
            runValidationTasks("TipodiPartecipazione", value);
          }
          setTipodiPartecipazione(value);
        }}
        onBlur={() =>
          runValidationTasks("TipodiPartecipazione", TipodiPartecipazione)
        }
        errorMessage={errors.TipodiPartecipazione?.errorMessage}
        hasError={errors.TipodiPartecipazione?.hasError}
        {...getOverrideProps(overrides, "TipodiPartecipazione")}
      >
        <option
          children="Competitivo"
          value="COMPETITIVO"
          {...getOverrideProps(overrides, "TipodiPartecipazioneoption0")}
        ></option>
        <option
          children="Espositivo"
          value="ESPOSITIVO"
          {...getOverrideProps(overrides, "TipodiPartecipazioneoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Premio speciale"
        placeholder="Please select an option"
        isDisabled={false}
        value={PremioSpeciale}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descrizione,
              ClasseAppartenenza,
              Categoria,
              TipodiPartecipazione,
              PremioSpeciale: value,
            };
            const result = onChange(modelFields);
            value = result?.PremioSpeciale ?? value;
          }
          if (errors.PremioSpeciale?.hasError) {
            runValidationTasks("PremioSpeciale", value);
          }
          setPremioSpeciale(value);
        }}
        onBlur={() => runValidationTasks("PremioSpeciale", PremioSpeciale)}
        errorMessage={errors.PremioSpeciale?.errorMessage}
        hasError={errors.PremioSpeciale?.hasError}
        {...getOverrideProps(overrides, "PremioSpeciale")}
      >
        <option
          children="Trofeo napoleone"
          value="TROFEO_NAPOLEONE"
          {...getOverrideProps(overrides, "PremioSpecialeoption0")}
        ></option>
        <option
          children="Trofeo garibaldi"
          value="TROFEO_GARIBALDI"
          {...getOverrideProps(overrides, "PremioSpecialeoption1")}
        ></option>
        <option
          children="Trofeo janusceriffu"
          value="TROFEO_JANUSCERIFFU"
          {...getOverrideProps(overrides, "PremioSpecialeoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
