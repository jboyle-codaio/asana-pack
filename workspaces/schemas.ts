import {makeObjectSchema, ValueHintType, ValueType} from "@codahq/packs-sdk";
import {resourceSchema} from "../common/schemas";

export const workspaceSchema = makeObjectSchema({
    type: ValueType.Object,
    id: 'gid',
    primary: 'name',
    properties: {
        ...resourceSchema.properties,
        email_domains: { type: ValueType.Array, items: { type: ValueType.String } },
        is_organization: { type: ValueType.Boolean },
    },
});
