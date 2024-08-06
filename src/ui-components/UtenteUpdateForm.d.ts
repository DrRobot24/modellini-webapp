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
export declare type UtenteUpdateFormInputValues = {
    cognitoId?: string;
    nome?: string;
    cognome?: string;
    telefono?: string;
    email?: string;
};
export declare type UtenteUpdateFormValidationValues = {
    cognitoId?: ValidationFunction<string>;
    nome?: ValidationFunction<string>;
    cognome?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UtenteUpdateFormOverridesProps = {
    UtenteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cognitoId?: PrimitiveOverrideProps<TextFieldProps>;
    nome?: PrimitiveOverrideProps<TextFieldProps>;
    cognome?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UtenteUpdateFormProps = React.PropsWithChildren<{
    overrides?: UtenteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    utente?: any;
    onSubmit?: (fields: UtenteUpdateFormInputValues) => UtenteUpdateFormInputValues;
    onSuccess?: (fields: UtenteUpdateFormInputValues) => void;
    onError?: (fields: UtenteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UtenteUpdateFormInputValues) => UtenteUpdateFormInputValues;
    onValidate?: UtenteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UtenteUpdateForm(props: UtenteUpdateFormProps): React.ReactElement;
