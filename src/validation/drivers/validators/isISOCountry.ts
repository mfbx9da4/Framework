import { ValidationError } from "../../../errors/http/ValidationError"
import * as Validator from "validator"

export const isISOAlpha2CountryCode = (input: unknown): string => {
    if (Validator.isISO31661Alpha2(String(input))) {
        return String(input)
    } else {
        throw new ValidationError(
            "IS_ISO_ALPHA_2_COUNTRY",
            "Value not an ISO Alpha-2 Country Code",
            "This value must be a valid ISO Alpha-2 Country Code."
        )
    }
}
