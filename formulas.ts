import type {Format} from '@codahq/packs-sdk';
import type {GenericSyncTable} from '@codahq/packs-sdk';
import type {Formula} from '@codahq/packs-sdk';
import {tasksSyncTable} from "./tasks/tables";
import {workspacesSyncTable} from "./workspaces/tables";
import {projectsSyncTable} from "./projects/tables";
import {addTaskFormula} from "./tasks/actions";
import {usersSyncTable} from "./users/tables";

export const formulas: Formula[] = [
  addTaskFormula,
];

export const syncTables: GenericSyncTable[] = [
  workspacesSyncTable,
  projectsSyncTable,
  tasksSyncTable,
  usersSyncTable,
];

export const formats: Format[] = [
];
