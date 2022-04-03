import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String'];
  user: User;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
  posts: Array<Post>;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  id: Scalars['String'];
  post?: Maybe<Post>;
  user: User;
  userId: Scalars['String'];
};

export type Favorite = {
  __typename?: 'Favorite';
  id: Scalars['String'];
  posts: Array<Post>;
  user: User;
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  googleLogin: AuthPayload;
  logout: User;
  refreshAuth: AuthPayload;
};


export type MutationGoogleLoginArgs = {
  tokenId: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  about: Scalars['String'];
  categories: Array<Category>;
  comments: Array<Comment>;
  destination: Scalars['String'];
  favoriteId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  title: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
  me: User;
  users?: Maybe<Array<User>>;
};

export enum Role {
  Admin = 'ADMIN',
  Free = 'FREE'
}

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  email: Scalars['String'];
  favorites?: Maybe<Array<Favorite>>;
  id: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  posts: Array<Post>;
  role: Role;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name: string, image: string, email: string } };


export const MeDocument = gql`
    query ME {
  me {
    id
    name
    image
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;