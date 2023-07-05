/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClothingItemCreateFormInputValues = {
    name?: string;
    num_of_purchases?: number;
};
export declare type ClothingItemCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    num_of_purchases?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClothingItemCreateFormOverridesProps = {
    ClothingItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    num_of_purchases?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClothingItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ClothingItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClothingItemCreateFormInputValues) => ClothingItemCreateFormInputValues;
    onSuccess?: (fields: ClothingItemCreateFormInputValues) => void;
    onError?: (fields: ClothingItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClothingItemCreateFormInputValues) => ClothingItemCreateFormInputValues;
    onValidate?: ClothingItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClothingItemCreateForm(props: ClothingItemCreateFormProps): React.ReactElement;
