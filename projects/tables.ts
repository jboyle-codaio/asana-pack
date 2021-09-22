import {ConnectionRequirement, GenericSyncFormulaResult, makeSyncTable} from "@codahq/packs-sdk";
import {fetchPaginatedResources} from "../common/helpers";
import {workspaceParameter} from "../common/parameters";
import {projectSchema} from "./schemas";

const optProjectProps = [
    'resource_type',
    'name',
    'archived',
    'color',
    'created_at',
    'current_status.(resource_type|title|color|html_text|created_at|modified_at).(resource_type|name)',
    'current_status.(author|created_by).(resource_type|name)',
    'default_view',
    'due_date',
    'due_on',
    'html_notes',
    'is_template',
    'members.(resource_type|name)',
    'modified_at',
    'public',
    'start_on',
    'workspace.(resource_type|name)',
    'followers.(resource_type|name)',
    'icon',
    'owner.(resource_type|name)',
    'permalink_url',
    'team.(resource_type|name)'
];

export const projectsSyncTable = makeSyncTable({
    name: 'Projects',
    identityName: 'Project',
    schema: projectSchema,
    formula: {
        name: 'Projects',
        description: 'Sync projects from Asana',
        parameters: [workspaceParameter],
        async execute([workspaceId], context): Promise<GenericSyncFormulaResult> {
            return fetchPaginatedResources(context, '/projects', {
                workspace: workspaceId,
                opt_fields: optProjectProps.join(','),
            })
        },
        connectionRequirement: ConnectionRequirement.Required,
    },
});
