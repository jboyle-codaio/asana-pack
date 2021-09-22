import {ConnectionRequirement, GenericSyncFormulaResult, makeSyncTable} from "@codahq/packs-sdk";
import {fetchPaginatedResources} from "../common/helpers";
import {userSchema} from "./schemas";
import {workspaceParameter} from "../common/parameters";

export const optUserProps = [
    'resource_type',
    'name',
    'email',
];

export const usersSyncTable = makeSyncTable({
    name: 'Users',
    identityName: 'User',
    schema: userSchema,
    formula: {
        name: 'Users',
        description: 'Sync users from Asana',
        parameters: [workspaceParameter],
        async execute([workspaceId], context): Promise<GenericSyncFormulaResult> {
            return fetchPaginatedResources(context, '/users', {
                workspace: workspaceId,
                opt_fields: optUserProps.join(','),
            })
        },
        connectionRequirement: ConnectionRequirement.Required,
    },
});
