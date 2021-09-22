import {makeObjectSchema, ValueHintType, ValueType} from "@codahq/packs-sdk";
import {resourceSchema} from "../common/schemas";

const statusSchema = makeObjectSchema({
    type: ValueType.Object,
    id: 'gid',
    primary: 'name',
    properties: {
        gid: { type: ValueType.String, required: true },
        resource_type: { type: ValueType.String },
        title: { type: ValueType.String },
        color: { type: ValueType.String },
        html_text: { type: ValueType.String, codaType: ValueHintType.Html },
        author: resourceSchema,
        created_at: { type: ValueType.String, codaType: ValueHintType.DateTime },
        created_by: resourceSchema,
        modified_at: { type: ValueType.String, codaType: ValueHintType.DateTime },
    },
});

export const projectSchema = makeObjectSchema({
    type: ValueType.Object,
    id: 'gid',
    primary: 'name',
    properties: {
        ...resourceSchema.properties,
        archived: { type: ValueType.Boolean },
        color: { type: ValueType.String },
        created_at: { type: ValueType.String, codaType: ValueHintType.DateTime },
        current_status: statusSchema,
        default_view: { type: ValueType.String },
        due_date: { type: ValueType.String, codaType: ValueHintType.Date },
        due_on: { type: ValueType.String, codaType: ValueHintType.Date },
        html_notes: { type: ValueType.String, codaType: ValueHintType.Html },
        is_template: { type: ValueType.Boolean },
        modified_at: { type: ValueType.String, codaType: ValueHintType.DateTime },
        public: { type: ValueType.Boolean },
        start_on: { type: ValueType.String, codaType: ValueHintType.DateTime },
        workspace: resourceSchema,
        followers: { type: ValueType.Array, items: resourceSchema },
        icon: { type: ValueType.String },
        owner: resourceSchema,
        permalink_url: { type: ValueType.String, codaType: ValueHintType.Url },
        team: resourceSchema,
    },
});
