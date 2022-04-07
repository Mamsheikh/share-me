/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context as Context } from "./context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreatePinInput: { // input type
    about: string; // String!
    category: string; // String!
    destination: string; // String!
    image: string; // String!
    title: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    accessToken: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Category: { // root type
    id: string; // String!
    name: string; // String!
  }
  Comment: { // root type
    content: string; // String!
    id: string; // String!
    userId: string; // String!
  }
  Mutation: {};
  Post: { // root type
    about: string; // String!
    destination: string; // String!
    id: string; // String!
    image: string; // String!
    title: string; // String!
    userId: string; // String!
  }
  Query: {};
  Save: { // root type
    id: string; // String!
    postId: string; // String!
    userId: string; // String!
  }
  SavePayload: { // root type
    message: string; // String!
    success: boolean; // Boolean!
  }
  User: { // root type
    email: string; // String!
    id: string; // String!
    image: string; // String!
    name: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    accessToken: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Category: { // field return type
    id: string; // String!
    name: string; // String!
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
  }
  Comment: { // field return type
    content: string; // String!
    id: string; // String!
    post: NexusGenRootTypes['Post'] | null; // Post
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  Mutation: { // field return type
    addComment: NexusGenRootTypes['Comment']; // Comment!
    createPin: NexusGenRootTypes['Post']; // Post!
    googleLogin: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    logout: NexusGenRootTypes['User']; // User!
    refreshAuth: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    savePost: NexusGenRootTypes['SavePayload']; // SavePayload!
  }
  Post: { // field return type
    about: string; // String!
    category: NexusGenRootTypes['Category']; // Category!
    comments: NexusGenRootTypes['Comment'][]; // [Comment!]!
    destination: string; // String!
    id: string; // String!
    image: string; // String!
    save: NexusGenRootTypes['Save'][] | null; // [Save!]
    title: string; // String!
    user: NexusGenRootTypes['User'] | null; // User
    userId: string; // String!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
    getPin: NexusGenRootTypes['Post']; // Post!
    getUser: NexusGenRootTypes['User'] | null; // User
    me: NexusGenRootTypes['User']; // User!
    more: NexusGenRootTypes['Post'][]; // [Post!]!
    search: NexusGenRootTypes['Post'][]; // [Post!]!
  }
  Save: { // field return type
    id: string; // String!
    post: NexusGenRootTypes['Post']; // Post!
    postId: string; // String!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // String!
  }
  SavePayload: { // field return type
    message: string; // String!
    success: boolean; // Boolean!
  }
  User: { // field return type
    comments: NexusGenRootTypes['Comment'][]; // [Comment!]!
    email: string; // String!
    id: string; // String!
    image: string; // String!
    name: string; // String!
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    save: NexusGenRootTypes['Save'][] | null; // [Save!]
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    accessToken: 'String'
    user: 'User'
  }
  Category: { // field return type name
    id: 'String'
    name: 'String'
    posts: 'Post'
  }
  Comment: { // field return type name
    content: 'String'
    id: 'String'
    post: 'Post'
    user: 'User'
    userId: 'String'
  }
  Mutation: { // field return type name
    addComment: 'Comment'
    createPin: 'Post'
    googleLogin: 'AuthPayload'
    logout: 'User'
    refreshAuth: 'AuthPayload'
    savePost: 'SavePayload'
  }
  Post: { // field return type name
    about: 'String'
    category: 'Category'
    comments: 'Comment'
    destination: 'String'
    id: 'String'
    image: 'String'
    save: 'Save'
    title: 'String'
    user: 'User'
    userId: 'String'
  }
  Query: { // field return type name
    feed: 'Post'
    getPin: 'Post'
    getUser: 'User'
    me: 'User'
    more: 'Post'
    search: 'Post'
  }
  Save: { // field return type name
    id: 'String'
    post: 'Post'
    postId: 'String'
    user: 'User'
    userId: 'String'
  }
  SavePayload: { // field return type name
    message: 'String'
    success: 'Boolean'
  }
  User: { // field return type name
    comments: 'Comment'
    email: 'String'
    id: 'String'
    image: 'String'
    name: 'String'
    posts: 'Post'
    save: 'Save'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addComment: { // args
      content: string; // String!
      postId: string; // String!
    }
    createPin: { // args
      input: NexusGenInputs['CreatePinInput']; // CreatePinInput!
    }
    googleLogin: { // args
      tokenId: string; // String!
    }
    savePost: { // args
      postId: string; // String!
      userId: string; // String!
    }
  }
  Query: {
    getPin: { // args
      postId: string; // String!
    }
    more: { // args
      category: string; // String!
      postId: string; // String!
    }
    search: { // args
      searchTerm: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}