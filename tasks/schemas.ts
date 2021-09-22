import {makeObjectSchema, ValueHintType, ValueType} from "@codahq/packs-sdk";
import {resourceSchema} from "../common/schemas";

export const taskSchema = makeObjectSchema({
    type: ValueType.Object,
    id: 'gid',
    primary: 'name',
    featured: ['completed'],
    properties: {
        ...resourceSchema.properties,
        approval_status: { type: ValueType.String },
        assignee_status: { type: ValueType.String },
        completed: { type: ValueType.Boolean },
        completed_at: { type: ValueType.String, codaType: ValueHintType.DateTime },
        completed_by: resourceSchema,
        created_at: { type: ValueType.String },
        due_at: { type: ValueType.String, codaType: ValueHintType.DateTime },
        due_on: { type: ValueType.String, codaType: ValueHintType.Date },
        html_notes: { type: ValueType.String, codaType: ValueHintType.Html },
        modified_at: { type: ValueType.String, codaType: ValueHintType.DateTime },
        num_hearts: { type: ValueType.Number },
        num_likes: { type: ValueType.Number },
        num_subtasks: { type: ValueType.Number },
        resource_subtype: { type: ValueType.String },
        start_on: { type: ValueType.String, codaType: ValueHintType.Date },
        assignee: resourceSchema,
        parent: resourceSchema,
        projects: { type: ValueType.Array, items: resourceSchema },
        tags: { type: ValueType.Array, items: resourceSchema },
        permalink_url: { type: ValueType.String, codaType: ValueHintType.Url },
        workspace: { type: ValueType.Array, items: resourceSchema },
    },
});
