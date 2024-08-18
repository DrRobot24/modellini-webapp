/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UtenteCreateFormInputValues = {
    cognitoId?: string;
    nome?: string;
    cognome?: string;
    telefono?: string;
};
export declare type UtenteCreateFormValidationValues = {
    cognitoId?: ValidationFunction<string>;
    nome?: ValidationFunction<string>;
    cognome?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UtenteCreateFormOverridesProps = {
    UtenteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cognitoId?: PrimitiveOverrideProps<TextFieldProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    cognome?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UtenteCreateFormProps = React.PropsWithChildren<{
    overrides?: UtenteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UtenteCreateFormInputValues) => UtenteCreateFormInputValues;
    onSuccess?: (fields: UtenteCreateFormInputValues) => void;
    onError?: (fields: UtenteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UtenteCreateFormInputValues) => UtenteCreateFormInputValues;
    onValidate?: UtenteCreateFormValidationValues;
} & React.CSSProperties>;
export default function UtenteCreateForm(props: UtenteCreateFormProps): React.ReactElement;
