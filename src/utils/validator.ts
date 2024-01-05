import { ValidationOptions, registerDecorator } from "class-validator"

export const FollowsRegExp = (r: RegExp, validationOptions?: ValidationOptions) => (
    (object: object, propertyName: string) => registerDecorator({
        name: 'FollowsRegExp',
        target: object.constructor,
        propertyName,
        options: validationOptions,
        validator: (value: string) => !!value.match(r)
    })
)

export const IsPhone = (validatorOptions?: ValidationOptions) => FollowsRegExp(
    /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    validatorOptions
)