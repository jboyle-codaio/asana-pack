import {makeParameter, ParameterType} from "@codahq/packs-sdk";

export const workspaceParameter = makeParameter({
    type: ParameterType.String,
    name: 'workspaceId',
    description: 'An Asana workspace ID',
});

export const projectParameter = makeParameter({
    type: ParameterType.String,
    name: 'projectId',
    description: 'An Asana project ID',
});

export const projectsParameter = makeParameter({
    type: ParameterType.StringArray,
    name: 'projectIds',
    description: 'A list of Asana project IDs',
});

export const taskNameParameter = makeParameter({
    type: ParameterType.String,
    name: 'taskName',
    description: 'An Asana task name',
});