import {ConnectionRequirement, GenericSyncFormulaResult, makeSyncTable} from "@codahq/packs-sdk";
import {fetchPaginatedResources} from "../common/helpers";
import {workspaceSchema} from "./schemas";

export const optWorkspaceProps = [
    'resource_type',
    'name',
    'email_domains',
    'is_organization',
];

export const workspacesSyncTable = makeSyncTable({
    name: 'Workspaces',
    identityName: 'Workspace',
    schema: workspaceSchema,
    formula: {
        name: 'Workspaces',
        description: 'Sync workspaces from Asana',
        parameters: [],
        async execute(args, context): Promise<GenericSyncFormulaResult> {
            return fetchPaginatedResources(context, '/workspaces', {
                opt_fields: optWorkspaceProps.join(','),
            })
        },
        connectionRequirement: ConnectionRequirement.Required,
    },
});
