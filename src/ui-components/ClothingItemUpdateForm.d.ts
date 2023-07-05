/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ClothingItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClothingItemUpdateFormInputValues = {
    name?: string;
    num_of_purchases?: number;
};
export declare type ClothingItemUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    num_of_purchases?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClothingItemUpdateFormOverridesProps = {
    ClothingItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    num_of_purchases?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClothingItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClothingItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clothingItem?: ClothingItem;
    onSubmit?: (fields: ClothingItemUpdateFormInputValues) => ClothingItemUpdateFormInputValues;
    onSuccess?: (fields: ClothingItemUpdateFormInputValues) => void;
    onError?: (fields: ClothingItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClothingItemUpdateFormInputValues) => ClothingItemUpdateFormInputValues;
    onValidate?: ClothingItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClothingItemUpdateForm(props: ClothingItemUpdateFormProps): React.ReactElement;
