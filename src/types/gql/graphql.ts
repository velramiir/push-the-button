/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The Any scalar type is used in operations and types that involve any type of value. */
  Any: { input: any; output: any; }
  /** The Bytes scalar type is used in operations and types that involve base 64 binary data. */
  Bytes: { input: any; output: any; }
  /** The Date scalar type is used in operations and types that involve dates. */
  Date: { input: any; output: any; }
  /** The File scalar type is used in operations and types that involve files. */
  File: { input: any; output: any; }
  /** The Object scalar type is used in operations and types that involve objects. */
  Object: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

/** Current access control list of the current object. */
export type Acl = {
  __typename?: 'ACL';
  /** Public access control list. */
  public?: Maybe<PublicAcl>;
  /** Access control list for roles. */
  roles?: Maybe<Array<RoleAcl>>;
  /** Access control list for users. */
  users?: Maybe<Array<UserAcl>>;
};

/** Allow to manage access rights. If not provided object will be publicly readable and writable */
export type AclInput = {
  /** Public access control list. */
  public?: InputMaybe<PublicAclInput>;
  /** Access control list for roles. */
  roles?: InputMaybe<Array<RoleAclInput>>;
  /** Access control list for users. */
  users?: InputMaybe<Array<UserAclInput>>;
};

/** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
export type ArrayResult = Element | Player | Role | Room | User;

/** The ArrayWhereInput input type is used in operations that involve filtering objects by a field of type Array. */
export type ArrayWhereInput = {
  /** This is the containedBy operator to specify a constraint to select the objects where the values of an array field is contained by another specified array. */
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  /** This is the contains operator to specify a constraint to select the objects where the values of an array field contain all elements of another specified array. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Any']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Any']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Any']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Any']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Any']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Any']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The BooleanWhereInput input type is used in operations that involve filtering objects by a field of type Boolean. */
export type BooleanWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The BoxInput type is used to specifiy a box operation on a within geo query. */
export type BoxInput = {
  /** This is the bottom left coordinates of the box. */
  bottomLeft: GeoPointInput;
  /** This is the upper right coordinates of the box. */
  upperRight: GeoPointInput;
};

/** The BytesWhereInput input type is used in operations that involve filtering objects by a field of type Bytes. */
export type BytesWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Bytes']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Bytes']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The CenterSphereInput type is used to specifiy a centerSphere operation on a geoWithin query. */
export type CenterSphereInput = {
  /** This is the center of the sphere. */
  center: GeoPointInput;
  /** This is the radius of the sphere. */
  distance: Scalars['Float']['input'];
};

/** The Class type is used to return the information about an object class. */
export type Class = {
  __typename?: 'Class';
  /** This is the name of the object class. */
  name: Scalars['String']['output'];
  /** These are the schema's fields of the object class. */
  schemaFields: Array<SchemaField>;
};

export type CreateClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the name of the object class. */
  name: Scalars['String']['input'];
  /** These are the schema's fields of the object class. */
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};

export type CreateClassPayload = {
  __typename?: 'CreateClassPayload';
  /** This is the created class. */
  class: Class;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateFileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the new file to be created and uploaded. */
  upload: Scalars['Upload']['input'];
};

export type CreateFilePayload = {
  __typename?: 'CreateFilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created file info. */
  fileInfo: FileInfo;
};

/** The CreatePlayerFieldsInput input type is used in operations that involve creation of objects in the Player class. */
export type CreatePlayerFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object name. */
  name: Scalars['String']['input'];
};

export type CreatePlayerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreatePlayerFieldsInput>;
};

export type CreatePlayerPayload = {
  __typename?: 'CreatePlayerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  player: Player;
};

/** The CreateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class. */
export type CreateRoleFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** This is the object roles. */
  roles?: InputMaybe<RoleRelationInput>;
  /** This is the object users. */
  users?: InputMaybe<UserRelationInput>;
};

export type CreateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateRoleFieldsInput>;
};

export type CreateRolePayload = {
  __typename?: 'CreateRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  role: Role;
};

/** The CreateRoomFieldsInput input type is used in operations that involve creation of objects in the Room class. */
export type CreateRoomFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object code. */
  code: Scalars['String']['input'];
};

export type CreateRoomInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateRoomFieldsInput>;
};

export type CreateRoomPayload = {
  __typename?: 'CreateRoomPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  room: Room;
};

/** The CreateUserFieldsInput input type is used in operations that involve creation of objects in the User class. */
export type CreateUserFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object authData. */
  authData?: InputMaybe<Scalars['Object']['input']>;
  /** This is the object email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the object password. */
  password: Scalars['String']['input'];
  /** This is the object username. */
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateUserFieldsInput>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  user: User;
};

/** The DateWhereInput input type is used in operations that involve filtering objects by a field of type Date. */
export type DateWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Date']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Date']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Date']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Date']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Date']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Date']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type DeleteClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the name of the object class. */
  name: Scalars['String']['input'];
};

export type DeleteClassPayload = {
  __typename?: 'DeleteClassPayload';
  /** This is the deleted class. */
  class: Class;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeletePlayerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeletePlayerPayload = {
  __typename?: 'DeletePlayerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  player: Player;
};

export type DeleteRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteRolePayload = {
  __typename?: 'DeleteRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  role: Role;
};

export type DeleteRoomInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteRoomPayload = {
  __typename?: 'DeleteRoomPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  room: Room;
};

export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  user: User;
};

/** The Element object type is used to return array items' value. */
export type Element = {
  __typename?: 'Element';
  /** Return the value of the element in the array */
  value: Scalars['Any']['output'];
};

/** The FileInfo object type is used to return the information about files. */
export type FileInfo = {
  __typename?: 'FileInfo';
  /** This is the file name. */
  name: Scalars['String']['output'];
  /** This is the url in which the file can be downloaded. */
  url: Scalars['String']['output'];
};

export type FileInput = {
  /** A File Scalar can be an url or a FileInfo object. If this field is set to null the file will be unlinked. */
  file?: InputMaybe<Scalars['File']['input']>;
  /** Use this field if you want to unlink the file (the file will not be deleted on cloud storage) */
  unlink?: InputMaybe<Scalars['Boolean']['input']>;
  /** Use this field if you want to create a new file. */
  upload?: InputMaybe<Scalars['Upload']['input']>;
};

/** The FileWhereInput input type is used in operations that involve filtering objects by a field of type File. */
export type FileWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['File']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['File']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['File']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['File']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['File']['input']>;
  /** This is the matchesRegex operator to specify a constraint to select the objects where the value of a field matches a specified regular expression. */
  matchesRegex?: InputMaybe<Scalars['String']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['File']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
  /** This is the options operator to specify optional flags (such as "i" and "m") to be added to a matchesRegex operation in the same set of constraints. */
  options?: InputMaybe<Scalars['String']['input']>;
};

/** The GeoIntersectsInput type is used to specify a geoIntersects operation on a constraint. */
export type GeoIntersectsInput = {
  /** This is the point to be specified. */
  point?: InputMaybe<GeoPointInput>;
};

/** The GeoPoint object type is used to return the information about geo point fields. */
export type GeoPoint = {
  __typename?: 'GeoPoint';
  /** This is the latitude. */
  latitude: Scalars['Float']['output'];
  /** This is the longitude. */
  longitude: Scalars['Float']['output'];
};

/** The GeoPointInput type is used in operations that involve inputting fields of type geo point. */
export type GeoPointInput = {
  /** This is the latitude. */
  latitude: Scalars['Float']['input'];
  /** This is the longitude. */
  longitude: Scalars['Float']['input'];
};

/** The GeoPointWhereInput input type is used in operations that involve filtering objects by a field of type GeoPoint. */
export type GeoPointWhereInput = {
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the geoWithin operator to specify a constraint to select the objects where the values of a geo point field is within a specified polygon or sphere. */
  geoWithin?: InputMaybe<GeoWithinInput>;
  /** This is the maxDistance operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in radians) from the geo point specified in the $nearSphere operator. */
  maxDistance?: InputMaybe<Scalars['Float']['input']>;
  /** This is the maxDistanceInKilometers operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in kilometers) from the geo point specified in the $nearSphere operator. */
  maxDistanceInKilometers?: InputMaybe<Scalars['Float']['input']>;
  /** This is the maxDistanceInMiles operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in miles) from the geo point specified in the $nearSphere operator. */
  maxDistanceInMiles?: InputMaybe<Scalars['Float']['input']>;
  /** This is the maxDistanceInRadians operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in radians) from the geo point specified in the $nearSphere operator. */
  maxDistanceInRadians?: InputMaybe<Scalars['Float']['input']>;
  /** This is the nearSphere operator to specify a constraint to select the objects where the values of a geo point field is near to another geo point. */
  nearSphere?: InputMaybe<GeoPointInput>;
  /** This is the within operator to specify a constraint to select the objects where the values of a geo point field is within a specified box. */
  within?: InputMaybe<WithinInput>;
};

/** The GeoWithinInput type is used to specify a geoWithin operation on a constraint. */
export type GeoWithinInput = {
  /** This is the sphere to be specified. */
  centerSphere?: InputMaybe<CenterSphereInput>;
  /** This is the polygon to be specified. */
  polygon?: InputMaybe<Array<GeoPointInput>>;
};

/** The IdWhereInput input type is used in operations that involve filtering objects by an id. */
export type IdWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['ID']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['ID']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['ID']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['ID']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['ID']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** An entry from an object, i.e., a pair of key and value. */
export type KeyValueInput = {
  /** The key used to retrieve the value of this entry. */
  key: Scalars['String']['input'];
  /** The value of the entry. Could be any type of scalar data. */
  value: Scalars['Any']['input'];
};

export type LogInInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the password used to log in the user. */
  password: Scalars['String']['input'];
  /** This is the username used to log in the user. */
  username: Scalars['String']['input'];
};

export type LogInPayload = {
  __typename?: 'LogInPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the existing user that was logged in and returned as a viewer. */
  viewer: Viewer;
};

export type LogInWithInput = {
  authData: Scalars['Object']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<UserLoginWithInput>;
};

export type LogInWithPayload = {
  __typename?: 'LogInWithPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the new user that was created, signed up and returned as a viewer. */
  viewer: Viewer;
};

export type LogOutInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type LogOutPayload = {
  __typename?: 'LogOutPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** It's always true. */
  ok: Scalars['Boolean']['output'];
};

/** Mutation is the top level type for mutations. */
export type Mutation = {
  __typename?: 'Mutation';
  /** The createClass mutation can be used to create the schema for a new object class. */
  createClass?: Maybe<CreateClassPayload>;
  /** The createFile mutation can be used to create and upload a new file. */
  createFile?: Maybe<CreateFilePayload>;
  /** The createPlayer mutation can be used to create a new object of the Player class. */
  createPlayer?: Maybe<CreatePlayerPayload>;
  /** The createRole mutation can be used to create a new object of the Role class. */
  createRole?: Maybe<CreateRolePayload>;
  /** The createRoom mutation can be used to create a new object of the Room class. */
  createRoom?: Maybe<CreateRoomPayload>;
  /** The createUser mutation can be used to create a new object of the User class. */
  createUser?: Maybe<CreateUserPayload>;
  /** The deleteClass mutation can be used to delete an existing object class. */
  deleteClass?: Maybe<DeleteClassPayload>;
  /** The deletePlayer mutation can be used to delete an object of the Player class. */
  deletePlayer?: Maybe<DeletePlayerPayload>;
  /** The deleteRole mutation can be used to delete an object of the Role class. */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** The deleteRoom mutation can be used to delete an object of the Room class. */
  deleteRoom?: Maybe<DeleteRoomPayload>;
  /** The deleteUser mutation can be used to delete an object of the User class. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** The logIn mutation can be used to log in an existing user. */
  logIn?: Maybe<LogInPayload>;
  /** The logInWith mutation can be used to signup, login user with 3rd party authentication system. This mutation create a user if the authData do not correspond to an existing one. */
  logInWith?: Maybe<LogInWithPayload>;
  /** The logOut mutation can be used to log out an existing user. */
  logOut?: Maybe<LogOutPayload>;
  /** The resetPassword mutation can be used to reset the password of an existing user. */
  resetPassword?: Maybe<ResetPasswordPayload>;
  /** The sendVerificationEmail mutation can be used to send the verification email again. */
  sendVerificationEmail?: Maybe<SendVerificationEmailPayload>;
  /** The signUp mutation can be used to create and sign up a new user. */
  signUp?: Maybe<SignUpPayload>;
  /** The updateClass mutation can be used to update the schema for an existing object class. */
  updateClass?: Maybe<UpdateClassPayload>;
  /** The updatePlayer mutation can be used to update an object of the Player class. */
  updatePlayer?: Maybe<UpdatePlayerPayload>;
  /** The updateRole mutation can be used to update an object of the Role class. */
  updateRole?: Maybe<UpdateRolePayload>;
  /** The updateRoom mutation can be used to update an object of the Room class. */
  updateRoom?: Maybe<UpdateRoomPayload>;
  /** The updateUser mutation can be used to update an object of the User class. */
  updateUser?: Maybe<UpdateUserPayload>;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateClassArgs = {
  input: CreateClassInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateFileArgs = {
  input: CreateFileInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreatePlayerArgs = {
  input: CreatePlayerInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateRoomArgs = {
  input: CreateRoomInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteClassArgs = {
  input: DeleteClassInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeletePlayerArgs = {
  input: DeletePlayerInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteRoomArgs = {
  input: DeleteRoomInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** Mutation is the top level type for mutations. */
export type MutationLogInArgs = {
  input: LogInInput;
};


/** Mutation is the top level type for mutations. */
export type MutationLogInWithArgs = {
  input: LogInWithInput;
};


/** Mutation is the top level type for mutations. */
export type MutationLogOutArgs = {
  input: LogOutInput;
};


/** Mutation is the top level type for mutations. */
export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


/** Mutation is the top level type for mutations. */
export type MutationSendVerificationEmailArgs = {
  input: SendVerificationEmailInput;
};


/** Mutation is the top level type for mutations. */
export type MutationSignUpArgs = {
  input: SignUpInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateClassArgs = {
  input: UpdateClassInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdatePlayerArgs = {
  input: UpdatePlayerInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateRoomArgs = {
  input: UpdateRoomInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
};

/** The NumberWhereInput input type is used in operations that involve filtering objects by a field of type Number. */
export type NumberWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The ObjectWhereInput input type is used in operations that involve filtering result by a field of type Object. */
export type ObjectWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<KeyValueInput>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<KeyValueInput>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<KeyValueInput>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<KeyValueInput>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<KeyValueInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<KeyValueInput>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The ParseObject interface type is used as a base type for the auto generated object types. */
export type ParseObject = {
  ACL: Acl;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
};

/** The Player object type is used in operations that involve outputting objects of Player class. */
export type Player = Node & ParseObject & {
  __typename?: 'Player';
  ACL: Acl;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object name. */
  name: Scalars['String']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
};

/** A connection to a list of items. */
export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlayerEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Player>;
};

/** The PlayerOrder input type is used when sorting objects of the Player class. */
export enum PlayerOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Allow to link OR add and link an object of the Player class. */
export type PlayerPointerInput = {
  /** Create and link an object from Player class. */
  createAndLink?: InputMaybe<CreatePlayerFieldsInput>;
  /** Link an existing object from Player class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the Player class into a relation field. */
export type PlayerRelationInput = {
  /** Add existing objects from the Player class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the Player class into the relation. */
  createAndAdd?: InputMaybe<Array<CreatePlayerFieldsInput>>;
  /** Remove existing objects from the Player class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The PlayerRelationWhereInput input type is used in operations that involve filtering objects of Player class. */
export type PlayerRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<PlayerWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<PlayerWhereInput>;
};

/** The PlayerWhereInput input type is used in operations that involve filtering objects of Player class. */
export type PlayerWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<PlayerWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<PlayerWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<PlayerWhereInput>>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** The PointerFieldInput is used to specify a field of type pointer for an object class schema. */
export type PointerFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']['input'];
};

/** The PolygonWhereInput input type is used in operations that involve filtering objects by a field of type Polygon. */
export type PolygonWhereInput = {
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the geoIntersects operator to specify a constraint to select the objects where the values of a polygon field intersect a specified point. */
  geoIntersects?: InputMaybe<GeoIntersectsInput>;
};

/** Allow to manage public rights. */
export type PublicAcl = {
  __typename?: 'PublicACL';
  /** Allow anyone to read the current object. */
  read?: Maybe<Scalars['Boolean']['output']>;
  /** Allow anyone to write on the current object. */
  write?: Maybe<Scalars['Boolean']['output']>;
};

/** Allow to manage public rights. */
export type PublicAclInput = {
  /** Allow anyone to read the current object. */
  read: Scalars['Boolean']['input'];
  /** Allow anyone to write on the current object. */
  write: Scalars['Boolean']['input'];
};

/** Query is the top level type for queries. */
export type Query = {
  __typename?: 'Query';
  /** The class query can be used to retrieve an existing object class. */
  class: Class;
  /** The classes query can be used to retrieve the existing object classes. */
  classes: Array<Class>;
  /** The health query can be used to check if the server is up and running. */
  health: Scalars['Boolean']['output'];
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** The player query can be used to get an object of the Player class by its id. */
  player: Player;
  /** The players query can be used to find objects of the Player class. */
  players: PlayerConnection;
  /** The role query can be used to get an object of the Role class by its id. */
  role: Role;
  /** The roles query can be used to find objects of the Role class. */
  roles: RoleConnection;
  /** The room query can be used to get an object of the Room class by its id. */
  room: Room;
  /** The rooms query can be used to find objects of the Room class. */
  rooms: RoomConnection;
  /** The user query can be used to get an object of the User class by its id. */
  user: User;
  /** The users query can be used to find objects of the User class. */
  users: UserConnection;
  /** The viewer query can be used to return the current user data. */
  viewer: Viewer;
};


/** Query is the top level type for queries. */
export type QueryClassArgs = {
  name: Scalars['String']['input'];
};


/** Query is the top level type for queries. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** Query is the top level type for queries. */
export type QueryPlayerArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryPlayersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<PlayerOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlayerWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryRoomArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryRoomsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoomOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoomWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryUserArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

/** The ReadOptionsInputt type is used in queries in order to set the read preferences. */
export type ReadOptionsInput = {
  /** The read preference for the queries to be executed to include fields. */
  includeReadPreference?: InputMaybe<ReadPreference>;
  /** The read preference for the main query to be executed. */
  readPreference?: InputMaybe<ReadPreference>;
  /** The read preference for the subqueries that may be required. */
  subqueryReadPreference?: InputMaybe<ReadPreference>;
};

/** The ReadPreference enum type is used in queries in order to select in which database replica the operation must run. */
export enum ReadPreference {
  Nearest = 'NEAREST',
  Primary = 'PRIMARY',
  PrimaryPreferred = 'PRIMARY_PREFERRED',
  Secondary = 'SECONDARY',
  SecondaryPreferred = 'SECONDARY_PREFERRED'
}

/** The RelationFieldInput is used to specify a field of type relation for an object class schema. */
export type RelationFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** It's always true. */
  ok: Scalars['Boolean']['output'];
};

/** The Role object type is used in operations that involve outputting objects of Role class. */
export type Role = Node & ParseObject & {
  __typename?: 'Role';
  ACL: Acl;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object name. */
  name?: Maybe<Scalars['String']['output']>;
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the object roles. */
  roles: RoleConnection;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
  /** This is the object users. */
  users: UserConnection;
};


/** The Role object type is used in operations that involve outputting objects of Role class. */
export type RoleRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


/** The Role object type is used in operations that involve outputting objects of Role class. */
export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

/** Allow to manage roles in ACL. If read and write are null the role have read and write rights. */
export type RoleAcl = {
  __typename?: 'RoleACL';
  /** Allow users who are members of the role to read the current object. */
  read: Scalars['Boolean']['output'];
  /** Name of the targetted Role. */
  roleName: Scalars['ID']['output'];
  /** Allow users who are members of the role to write on the current object. */
  write: Scalars['Boolean']['output'];
};

/** Allow to manage roles in ACL. */
export type RoleAclInput = {
  /** Allow users who are members of the role to read the current object. */
  read: Scalars['Boolean']['input'];
  /** Name of the targetted Role. */
  roleName: Scalars['String']['input'];
  /** Allow users who are members of the role to write on the current object. */
  write: Scalars['Boolean']['input'];
};

/** A connection to a list of items. */
export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Role>;
};

/** The RoleOrder input type is used when sorting objects of the Role class. */
export enum RoleOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  RolesAsc = 'roles_ASC',
  RolesDesc = 'roles_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsersAsc = 'users_ASC',
  UsersDesc = 'users_DESC'
}

/** Allow to link OR add and link an object of the Role class. */
export type RolePointerInput = {
  /** Create and link an object from Role class. */
  createAndLink?: InputMaybe<CreateRoleFieldsInput>;
  /** Link an existing object from Role class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the Role class into a relation field. */
export type RoleRelationInput = {
  /** Add existing objects from the Role class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the Role class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateRoleFieldsInput>>;
  /** Remove existing objects from the Role class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The RoleRelationWhereInput input type is used in operations that involve filtering objects of Role class. */
export type RoleRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<RoleWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<RoleWhereInput>;
};

/** The RoleWhereInput input type is used in operations that involve filtering objects of Role class. */
export type RoleWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<RoleWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<RoleWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<RoleWhereInput>>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object roles. */
  roles?: InputMaybe<RoleRelationWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
  /** This is the object users. */
  users?: InputMaybe<UserRelationWhereInput>;
};

/** The Room object type is used in operations that involve outputting objects of Room class. */
export type Room = Node & ParseObject & {
  __typename?: 'Room';
  ACL: Acl;
  /** This is the object code. */
  code: Scalars['String']['output'];
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
};

/** A connection to a list of items. */
export type RoomConnection = {
  __typename?: 'RoomConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RoomEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RoomEdge = {
  __typename?: 'RoomEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Room>;
};

/** The RoomOrder input type is used when sorting objects of the Room class. */
export enum RoomOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Allow to link OR add and link an object of the Room class. */
export type RoomPointerInput = {
  /** Create and link an object from Room class. */
  createAndLink?: InputMaybe<CreateRoomFieldsInput>;
  /** Link an existing object from Room class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the Room class into a relation field. */
export type RoomRelationInput = {
  /** Add existing objects from the Room class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the Room class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateRoomFieldsInput>>;
  /** Remove existing objects from the Room class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The RoomRelationWhereInput input type is used in operations that involve filtering objects of Room class. */
export type RoomRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<RoomWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<RoomWhereInput>;
};

/** The RoomWhereInput input type is used in operations that involve filtering objects of Room class. */
export type RoomWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<RoomWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<RoomWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<RoomWhereInput>>;
  /** This is the object code. */
  code?: InputMaybe<StringWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** The SchemaACLField is used to return information of an ACL field. */
export type SchemaAclField = SchemaField & {
  __typename?: 'SchemaACLField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaArrayField is used to return information of an Array field. */
export type SchemaArrayField = SchemaField & {
  __typename?: 'SchemaArrayField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaArrayFieldInput is used to specify a field of type array for an object class schema. */
export type SchemaArrayFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaBooleanField is used to return information of a Boolean field. */
export type SchemaBooleanField = SchemaField & {
  __typename?: 'SchemaBooleanField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaBooleanFieldInput is used to specify a field of type boolean for an object class schema. */
export type SchemaBooleanFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaBytesField is used to return information of a Bytes field. */
export type SchemaBytesField = SchemaField & {
  __typename?: 'SchemaBytesField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaBytesFieldInput is used to specify a field of type bytes for an object class schema. */
export type SchemaBytesFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaDateField is used to return information of a Date field. */
export type SchemaDateField = SchemaField & {
  __typename?: 'SchemaDateField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaDateFieldInput is used to specify a field of type date for an object class schema. */
export type SchemaDateFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaField interface type is used as a base type for the different supported fields of an object class schema. */
export type SchemaField = {
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaFieldInput is used to specify a field of an object class schema. */
export type SchemaFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The CreateClassSchemaInput type is used to specify the schema for a new object class to be created. */
export type SchemaFieldsInput = {
  /** These are the Array fields to be added to the class schema. */
  addArrays?: InputMaybe<Array<SchemaArrayFieldInput>>;
  /** These are the Boolean fields to be added to the class schema. */
  addBooleans?: InputMaybe<Array<SchemaBooleanFieldInput>>;
  /** These are the Bytes fields to be added to the class schema. */
  addBytes?: InputMaybe<Array<SchemaBytesFieldInput>>;
  /** These are the Date fields to be added to the class schema. */
  addDates?: InputMaybe<Array<SchemaDateFieldInput>>;
  /** These are the File fields to be added to the class schema. */
  addFiles?: InputMaybe<Array<SchemaFileFieldInput>>;
  /** This is the Geo Point field to be added to the class schema. Currently it is supported only one GeoPoint field per Class. */
  addGeoPoint?: InputMaybe<SchemaGeoPointFieldInput>;
  /** These are the Number fields to be added to the class schema. */
  addNumbers?: InputMaybe<Array<SchemaNumberFieldInput>>;
  /** These are the Object fields to be added to the class schema. */
  addObjects?: InputMaybe<Array<SchemaObjectFieldInput>>;
  /** These are the Pointer fields to be added to the class schema. */
  addPointers?: InputMaybe<Array<PointerFieldInput>>;
  /** These are the Polygon fields to be added to the class schema. */
  addPolygons?: InputMaybe<Array<SchemaPolygonFieldInput>>;
  /** These are the Relation fields to be added to the class schema. */
  addRelations?: InputMaybe<Array<RelationFieldInput>>;
  /** These are the String fields to be added to the class schema. */
  addStrings?: InputMaybe<Array<SchemaStringFieldInput>>;
  /** These are the fields to be removed from the class schema. */
  remove?: InputMaybe<Array<SchemaFieldInput>>;
};

/** The SchemaFileField is used to return information of a File field. */
export type SchemaFileField = SchemaField & {
  __typename?: 'SchemaFileField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaFileFieldInput is used to specify a field of type file for an object class schema. */
export type SchemaFileFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaGeoPointField is used to return information of a Geo Point field. */
export type SchemaGeoPointField = SchemaField & {
  __typename?: 'SchemaGeoPointField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaGeoPointFieldInput is used to specify a field of type geo point for an object class schema. */
export type SchemaGeoPointFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaNumberField is used to return information of a Number field. */
export type SchemaNumberField = SchemaField & {
  __typename?: 'SchemaNumberField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaNumberFieldInput is used to specify a field of type number for an object class schema. */
export type SchemaNumberFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaObjectField is used to return information of an Object field. */
export type SchemaObjectField = SchemaField & {
  __typename?: 'SchemaObjectField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaObjectFieldInput is used to specify a field of type object for an object class schema. */
export type SchemaObjectFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaPointerField is used to return information of a Pointer field. */
export type SchemaPointerField = SchemaField & {
  __typename?: 'SchemaPointerField';
  /** This is the field name. */
  name: Scalars['String']['output'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']['output'];
};

/** The SchemaPolygonField is used to return information of a Polygon field. */
export type SchemaPolygonField = SchemaField & {
  __typename?: 'SchemaPolygonField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaPolygonFieldInput is used to specify a field of type polygon for an object class schema. */
export type SchemaPolygonFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaRelationField is used to return information of a Relation field. */
export type SchemaRelationField = SchemaField & {
  __typename?: 'SchemaRelationField';
  /** This is the field name. */
  name: Scalars['String']['output'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']['output'];
};

/** The SchemaStringField is used to return information of a String field. */
export type SchemaStringField = SchemaField & {
  __typename?: 'SchemaStringField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaStringFieldInput is used to specify a field of type string for an object class schema. */
export type SchemaStringFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SearchInput type is used to specifiy a search operation on a full text search. */
export type SearchInput = {
  /** This is the flag to enable or disable case sensitive search. */
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the flag to enable or disable diacritic sensitive search. */
  diacriticSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the language to tetermine the list of stop words and the rules for tokenizer. */
  language?: InputMaybe<Scalars['String']['input']>;
  /** This is the term to be searched. */
  term: Scalars['String']['input'];
};

/** The SelectInput type is used to specify an inQueryKey or a notInQueryKey operation on a constraint. */
export type SelectInput = {
  /** This is the key in the result of the subquery that must match (not match) the field. */
  key: Scalars['String']['input'];
  /** This is the subquery to be executed. */
  query: SubqueryInput;
};

export type SendVerificationEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type SendVerificationEmailPayload = {
  __typename?: 'SendVerificationEmailPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** It's always true. */
  ok: Scalars['Boolean']['output'];
};

export type SignUpInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<CreateUserFieldsInput>;
};

export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the new user that was created, signed up and returned as a viewer. */
  viewer: Viewer;
};

/** The StringWhereInput input type is used in operations that involve filtering objects by a field of type String. */
export type StringWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** This is the matchesRegex operator to specify a constraint to select the objects where the value of a field matches a specified regular expression. */
  matchesRegex?: InputMaybe<Scalars['String']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
  /** This is the options operator to specify optional flags (such as "i" and "m") to be added to a matchesRegex operation in the same set of constraints. */
  options?: InputMaybe<Scalars['String']['input']>;
  /** This is the $text operator to specify a full text search constraint. */
  text?: InputMaybe<TextInput>;
};

/** The SubqueryInput type is used to specify a sub query to another class. */
export type SubqueryInput = {
  /** This is the class name of the object. */
  className: Scalars['String']['input'];
  /** These are the conditions that the objects need to match in order to be found */
  where: Scalars['Object']['input'];
};

/** The TextInput type is used to specify a text operation on a constraint. */
export type TextInput = {
  /** This is the search to be executed. */
  search: SearchInput;
};

export type UpdateClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the name of the object class. */
  name: Scalars['String']['input'];
  /** These are the schema's fields of the object class. */
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};

export type UpdateClassPayload = {
  __typename?: 'UpdateClassPayload';
  /** This is the updated class. */
  class: Class;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** The UpdatePlayerFieldsInput input type is used in operations that involve creation of objects in the Player class. */
export type UpdatePlayerFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePlayerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdatePlayerFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdatePlayerPayload = {
  __typename?: 'UpdatePlayerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  player: Player;
};

/** The UpdateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class. */
export type UpdateRoleFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** This is the object roles. */
  roles?: InputMaybe<RoleRelationInput>;
  /** This is the object users. */
  users?: InputMaybe<UserRelationInput>;
};

export type UpdateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateRoleFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateRolePayload = {
  __typename?: 'UpdateRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  role: Role;
};

/** The UpdateRoomFieldsInput input type is used in operations that involve creation of objects in the Room class. */
export type UpdateRoomFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object code. */
  code?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoomInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateRoomFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateRoomPayload = {
  __typename?: 'UpdateRoomPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  room: Room;
};

/** The UpdateUserFieldsInput input type is used in operations that involve creation of objects in the User class. */
export type UpdateUserFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object authData. */
  authData?: InputMaybe<Scalars['Object']['input']>;
  /** This is the object email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the object password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** This is the object username. */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateUserFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  user: User;
};

/** The User object type is used in operations that involve outputting objects of User class. */
export type User = Node & ParseObject & {
  __typename?: 'User';
  ACL: Acl;
  /** This is the object authData. */
  authData?: Maybe<Scalars['Object']['output']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** This is the object email. */
  email?: Maybe<Scalars['String']['output']>;
  /** This is the object emailVerified. */
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
  /** This is the object username. */
  username?: Maybe<Scalars['String']['output']>;
};

/** Allow to manage users in ACL. If read and write are null the users have read and write rights. */
export type UserAcl = {
  __typename?: 'UserACL';
  /** Allow the user to read the current object. */
  read: Scalars['Boolean']['output'];
  /** ID of the targetted User. */
  userId: Scalars['ID']['output'];
  /** Allow the user to write on the current object. */
  write: Scalars['Boolean']['output'];
};

/** Allow to manage users in ACL. */
export type UserAclInput = {
  /** Allow the user to read the current object. */
  read: Scalars['Boolean']['input'];
  /** ID of the targetted User. */
  userId: Scalars['ID']['input'];
  /** Allow the user to write on the current object. */
  write: Scalars['Boolean']['input'];
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<User>;
};

export type UserLoginWithInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The UserOrder input type is used when sorting objects of the User class. */
export enum UserOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  AuthDataAsc = 'authData_ASC',
  AuthDataDesc = 'authData_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailVerifiedAsc = 'emailVerified_ASC',
  EmailVerifiedDesc = 'emailVerified_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC'
}

/** Allow to link OR add and link an object of the User class. */
export type UserPointerInput = {
  /** Create and link an object from User class. */
  createAndLink?: InputMaybe<CreateUserFieldsInput>;
  /** Link an existing object from User class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the User class into a relation field. */
export type UserRelationInput = {
  /** Add existing objects from the User class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the User class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateUserFieldsInput>>;
  /** Remove existing objects from the User class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The UserRelationWhereInput input type is used in operations that involve filtering objects of User class. */
export type UserRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<UserWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<UserWhereInput>;
};

/** The UserWhereInput input type is used in operations that involve filtering objects of User class. */
export type UserWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<UserWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** This is the object authData. */
  authData?: InputMaybe<ObjectWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object email. */
  email?: InputMaybe<StringWhereInput>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<BooleanWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object password. */
  password?: InputMaybe<StringWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
  /** This is the object username. */
  username?: InputMaybe<StringWhereInput>;
};

/** The Viewer object type is used in operations that involve outputting the current user data. */
export type Viewer = {
  __typename?: 'Viewer';
  /** The current user session token. */
  sessionToken: Scalars['String']['output'];
  /** This is the current user. */
  user: User;
};

/** The WithinInput type is used to specify a within operation on a constraint. */
export type WithinInput = {
  /** This is the box to be specified. */
  box: BoxInput;
};

export type Back4AppQueryVariables = Exact<{ [key: string]: never; }>;


export type Back4AppQuery = { __typename?: 'Query', health: boolean, room: { __typename?: 'Room', code: string } };

export type PlayerCardGetPlayerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PlayerCardGetPlayerQuery = { __typename?: 'Query', player: { __typename?: 'Player', id: string, name: string } };

export type TitlePageCreatePlayerMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type TitlePageCreatePlayerMutation = { __typename?: 'Mutation', createPlayer?: { __typename?: 'CreatePlayerPayload', player: { __typename?: 'Player', id: string } } | null };


export const Back4AppDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Back4App"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"health"}},{"kind":"Field","name":{"kind":"Name","value":"room"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"Um9vbTp4aWJNZ3JGbmZy","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Back4AppQuery, Back4AppQueryVariables>;
export const PlayerCardGetPlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlayerCardGetPlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<PlayerCardGetPlayerQuery, PlayerCardGetPlayerQueryVariables>;
export const TitlePageCreatePlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TitlePageCreatePlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPlayer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fields"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<TitlePageCreatePlayerMutation, TitlePageCreatePlayerMutationVariables>;