import {
    ConnectionRequirement,
    makeFormula,
    ValueType
} from "@codahq/packs-sdk";
import {taskSchema} from "./schemas";
import {projectsParameter, taskNameParameter} from "../common/parameters";
import {runAction} from "../common/helpers";

export const addTaskFormula = makeFormula({
    name: 'AddTask',
    description: 'Create an Asana task',
    isAction: true,
    resultType: ValueType.Object,
    schema: taskSchema,
    parameters: [projectsParameter, taskNameParameter],
    async execute([projectsParameter, taskName], context) {
        return runAction(context, '/tasks', {
            projects: projectsParameter,
            name: taskName,
        });
    },
    connectionRequirement: ConnectionRequirement.Required,
});
