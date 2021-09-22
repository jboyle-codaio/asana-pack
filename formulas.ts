import {ConnectionRequirement} from '@codahq/packs-sdk';
import type {Format} from '@codahq/packs-sdk';
import type {GenericSyncTable} from '@codahq/packs-sdk';
import type {Formula} from '@codahq/packs-sdk';
import {makeFormula} from '@codahq/packs-sdk';
import {ValueType} from '@codahq/packs-sdk';
import {apiUrl} from './helpers';
import {resourceSchema} from './schemas';
import {Resource} from './types';
import type {FetchRequest} from '@codahq/packs-sdk';

const projectsFormula = makeFormula({
  name: 'Projects',
  description: 'Returns all projects in the current workspace',
  resultType: ValueType.Array,
  items: resourceSchema,
  parameters: [],
  async execute(args, context) {
    const request: FetchRequest = {
      method: 'GET',
      url: apiUrl(`/projects`),
    };
    const result = await context.fetcher.fetch(request);
    return result.body.data as Resource[];
  },
  connectionRequirement: ConnectionRequirement.Required,
});


export const formulas: Formula[] = [
  // Formula definitions go here, e.g.
  // makeStringFormula({ ... }),
  projectsFormula,
];

export const syncTables: GenericSyncTable[] = [
  // Sync table definitions go here, e.g.
  // makeSyncTable({...}),
];

export const formats: Format[] = [
  // Column formats go here, e.g.
  // {name: 'MyFormat', formulaNamespace: 'MyPack', formulaName: 'MyFormula'}
];
