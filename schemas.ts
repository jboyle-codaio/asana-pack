import {makeObjectSchema} from '@codahq/packs-sdk';
import {ValueType} from '@codahq/packs-sdk';
import {ValueHintType} from '@codahq/packs-sdk';

/*
 * Schemas for your formulas and sync table go here, e.g.
 */

// export const personSchema = makeObjectSchema({
//   type: ValueType.Object,
//   id: 'email',
//   primary: 'name',
//   properties: {
//     email: {type: ValueType.String},
//     name: {type: ValueType.String},
//     dateOfBirth: {type: ValueType.String, codaType: ValueHintType.Date, fromKey: 'dob'},
//   },
// });

export const resourceSchema = makeObjectSchema({
    type: ValueType.Object,
    id: 'id',
    primary: 'name',
    properties: {
        id: {type: ValueType.String, codaType: ValueHintType.Identifier, fromKey: 'gid', required: true},
        name: {type: ValueType.String, required: true},
        resourceType: {type: ValueType.String, fromKey: 'resource_type', required: true}
    }
});

