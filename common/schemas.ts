import {ObjectSchemaProperties} from "@codahq/packs-sdk/schema";
import {makeObjectSchema, ValueType} from "@codahq/packs-sdk";

const resourceProps: ObjectSchemaProperties = {
    gid: { type: ValueType.String, required: true },
    name: { type: ValueType.String },
    resource_type: { type: ValueType.String }
};

export const resourceSchema = makeObjectSchema({
    type: ValueType.Object,
    id: 'gid',
    primary: 'name',
    featured: ['name', 'gid'],
    properties: resourceProps
});