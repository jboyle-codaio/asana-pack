import {
    ConnectionRequirement,
    makeSyncTable,
} from "@codahq/packs-sdk";
import {projectParameter} from "../common/parameters";
import {taskSchema} from "./schemas";
import {fetchPaginatedResources} from "../common/helpers";

const optTaskProps = [
    'resource_type',
    'name',
    'approval_status',
    'assignee_status',
    'completed',
    'completed_at',
    'completed_by.(resource_type|name)',
    'created_at',
    'due_at',
    'due_on',
    'html_notes',
    'modified_at',
    'num_hearts',
    'num_likes',
    'num_subtasks',
    'resource_subtype',
    'start_on',
    'assignee.(resource_type|name)',
    'parent',
    'permalink_url',
    'projects.(resource_type|name)',
    'tags.(resource_type|name)',
    'workspace.(resource_type|name)'
];

export const tasksSyncTable = makeSyncTable({
    name: 'Tasks',
    identityName: 'Task',
    schema: taskSchema,
    formula: {
        name: 'Tasks',
        description: 'Sync tasks from Asana',
        parameters: [projectParameter],
        async execute([projectId], context) {
            return fetchPaginatedResources(context, '/tasks', {
                project: projectId,
                opt_fields: optTaskProps.join(','),
            })
        },
        connectionRequirement: ConnectionRequirement.Required,
    },
});
