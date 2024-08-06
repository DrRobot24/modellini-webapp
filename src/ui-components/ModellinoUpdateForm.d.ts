/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ModellinoUpdateFormInputValues = {
    Descrizione?: string;
    ClasseAppartenenza?: string;
    Categoria?: string;
    TipodiPartecipazione?: string;
    PremioSpeciale?: string;
};
export declare type ModellinoUpdateFormValidationValues = {
    Descrizione?: ValidationFunction<string>;
    ClasseAppartenenza?: ValidationFunction<string>;
    Categoria?: ValidationFunction<string>;
    TipodiPartecipazione?: ValidationFunction<string>;
    PremioSpeciale?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ModellinoUpdateFormOverridesProps = {
    ModellinoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Descrizione?: PrimitiveOverrideProps<TextFieldProps>;
    ClasseAppartenenza?: PrimitiveOverrideProps<SelectFieldProps>;
    Categoria?: PrimitiveOverrideProps<SelectFieldProps>;
    TipodiPartecipazione?: PrimitiveOverrideProps<SelectFieldProps>;
    PremioSpeciale?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ModellinoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ModellinoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    modellino?: any;
    onSubmit?: (fields: ModellinoUpdateFormInputValues) => ModellinoUpdateFormInputValues;
    onSuccess?: (fields: ModellinoUpdateFormInputValues) => void;
    onError?: (fields: ModellinoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ModellinoUpdateFormInputValues) => ModellinoUpdateFormInputValues;
    onValidate?: ModellinoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ModellinoUpdateForm(props: ModellinoUpdateFormProps): React.ReactElement;
