import {makeObjectSchema, ValueHintType, ValueType} from "@codahq/packs-sdk";
import {resourceSchema} from "../common/schemas";

export const userSchema = makeObjectSchema({
    type: ValueType.Object,
    id: 'gid',
    primary: 'name',
    properties: {
        ...resourceSchema.properties,
        email: { type: ValueType.String },
    },
});
